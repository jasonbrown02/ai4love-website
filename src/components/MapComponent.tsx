import React, { useEffect, useRef, useState } from 'react';
import * as mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Mapbox token handling
// For local development, you can add NEXT_PUBLIC_MAPBOX_TOKEN to your .env.local file
// For production, add this environment variable in your hosting platform (Netlify/Vercel)
// 
// IMPORTANT: When creating your Mapbox token, ensure it has these scopes:
// - STYLES:TILES, STYLES:READ, VISION:READ (required)
// - MAP:READ, DATASETS:READ (optional, if using geocoding or custom data)
//
// For security, add URL restrictions to your token in the Mapbox dashboard:
// - Add your production domain (e.g., https://ai4love-website.netlify.app)
// - Add your development domains (e.g., http://localhost:3000, http://localhost:3001)
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 
  // Fallback token for development - replace with your own or use .env.local
  'pk.eyJ1IjoiYWk0bG92ZSIsImEiOiJjbHVtYXBib3giLCJhIjoiY2xhc3NpYyJ9.dGVtcF9tYXBib3hfdG9rZW4=';

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
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Initialize map when component mounts
  useEffect(() => {
    if (!mapContainer.current) return;

    (mapboxgl as any).accessToken = MAPBOX_TOKEN;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11', // Dark style to match your red theme
      center: [center.lng, center.lat],
      zoom: zoom,
      attributionControl: false
    });

    map.current.on('load', () => {
      setMapLoaded(true);
      
      // Add a red overlay to match your theme
      if (map.current) {
        map.current.addLayer({
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
      }
    });

    // Add marker
    marker.current = new mapboxgl.Marker({ color: '#ffffff' })
      .setLngLat([center.lng, center.lat])
      .addTo(map.current);

    // Add popup with title
    new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat([center.lng, center.lat])
      .setHTML(`<h3 class="text-sm font-bold">${markerTitle}</h3>`)
      .addTo(map.current);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

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

    // Update marker position
    if (marker.current) {
      marker.current.setLngLat([center.lng, center.lat]);
    }

    // Update popup
    new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat([center.lng, center.lat])
      .setHTML(`<h3 class="text-sm font-bold">${markerTitle}</h3>`)
      .addTo(map.current);
    
  }, [center, zoom, markerTitle, mapLoaded]);

  return (
    <div 
      ref={mapContainer} 
      className="w-full h-full absolute inset-0"
      style={{ background: '#111' }} // Dark background while loading
    />
  );
};

export default MapComponent;
