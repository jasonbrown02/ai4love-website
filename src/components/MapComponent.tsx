"use client";

import React, { useEffect, useRef, useState } from 'react';

// Burlington, Ontario coordinates
const BURLINGTON_COORDS = {
  lat: 43.3255,
  lng: -79.7990
};

interface MapComponentProps {
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  markerTitle?: string;
  transitionDuration?: number;
}

const MapComponent: React.FC<MapComponentProps> = ({
  center = BURLINGTON_COORDS,
  zoom = 12,
  markerTitle = 'AI4Love Headquarters',
  transitionDuration = 1500
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const marker = useRef<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Initialize map when component mounts
  useEffect(() => {
    // Handle CSS manually to avoid import errors
    if (typeof document !== 'undefined') {
      // Add Mapbox CSS to head
      const linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css';
      document.head.appendChild(linkElement);
    }
    
    const initializeMap = async () => {
      if (!mapContainer.current) return;
      
      // Dynamically import mapbox-gl
      const mapboxgl = await import('mapbox-gl');
      
      // Get token from environment variable or use fallback
      const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 
        'pk.eyJ1IjoiYWk0bG92ZSIsImEiOiJjbHVtYXBib3giLCJhIjoiY2xhc3NpYyJ9.dGVtcF9tYXBib3hfdG9rZW4=';
      
      // Set access token
      mapboxgl.default.accessToken = MAPBOX_TOKEN;
      
      // Create map instance
      const mapInstance = new mapboxgl.default.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11', // Dark style to match your theme
        center: [center.lng, center.lat],
        zoom: zoom,
        attributionControl: false
      });
      
      // Store map instance in ref
      map.current = mapInstance;
      
      // Set up map load handler
      mapInstance.on('load', () => {
        setMapLoaded(true);
        
        // Add a red overlay to match your theme
        mapInstance.addLayer({
          id: 'red-overlay',
          type: 'fill',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-180, -90],
                    [180, -90],
                    [180, 90],
                    [-180, 90],
                    [-180, -90]
                  ]
                ]
              }
            }
          },
          paint: {
            'fill-color': '#ef4444', // Tailwind red-500
            'fill-opacity': 0.3
          }
        });
      });
      
      // Add marker
      const markerInstance = new mapboxgl.default.Marker({ color: '#ffffff' })
        .setLngLat([center.lng, center.lat])
        .addTo(mapInstance);
      
      // Store marker instance in ref
      marker.current = markerInstance;
      
      // Add popup with title
      new mapboxgl.default.Popup({ closeOnClick: false })
        .setLngLat([center.lng, center.lat])
        .setHTML(`<h3 class="text-sm font-bold">${markerTitle}</h3>`)
        .addTo(mapInstance);
    };
    
    // Initialize the map
    initializeMap();
    
    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []); // Empty dependency array to run only once on mount

  // Update map when center changes
  useEffect(() => {
    if (!map.current || !mapLoaded) return;
    
    // Fly to new location with animation
    map.current.flyTo({
      center: [center.lng, center.lat],
      zoom: zoom,
      duration: transitionDuration / 1000, // Mapbox uses seconds, not milliseconds
      essential: true
    });

    // Update marker position if it exists
    if (marker.current) {
      marker.current.setLngLat([center.lng, center.lat]);
    }

    // Update popup with new information
    const updatePopup = async () => {
      const mapboxgl = await import('mapbox-gl');
      new mapboxgl.default.Popup({ closeOnClick: false })
        .setLngLat([center.lng, center.lat])
        .setHTML(`<h3 class="text-sm font-bold">${markerTitle}</h3>`)
        .addTo(map.current);
    };
    
    updatePopup();
  }, [center, zoom, markerTitle, mapLoaded]);

  return (
    <div 
      ref={mapContainer} 
      className="w-full h-full absolute inset-0 z-0"
      style={{ 
        background: '#6B3535', // Dark brown background while loading
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%'
      }}
    />
  );
};

export default MapComponent;
