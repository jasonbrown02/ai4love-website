# AI4Love Feedback Hub - Setup Guide

## Overview
The AI4Love Feedback Hub is a dynamic landing page system for collecting feedback from partner meetings. It's accessed via QR codes on branded coasters and supports organization-specific personalization.

## URLs

### Primary URL (JBHF)
- **URL**: `https://ai4love.com/demo/JBHF`
- **Organization**: Jane Butterfield Hospital Foundation
- **Auto-populated fields**: Organization name

### Template for Other Organizations
- **Pattern**: `https://ai4love.com/demo/[ORG-SLUG]`
- **Example**: `https://ai4love.com/demo/ACME`

### Generic Fallback
- **URL**: `https://ai4love.com/demo/general`
- **Behavior**: Shows generic version without org-specific content

## Adding New Organizations

Edit `/src/pages/demo/[slug].tsx` and add to the `orgData` object:

```typescript
const orgData: Record<string, { name: string; sector: string }> = {
  'JBHF': { 
    name: 'Jane Butterfield Hospital Foundation', 
    sector: 'Healthcare'
  },
  'ACME': {
    name: 'ACME Nonprofit Foundation',
    sector: 'Community'
  },
  // Add more organizations here
}
```

## QR Code Generation

### Recommended QR Code Generator
- **Service**: QR Code Generator (qr-code-generator.com) or QR Code Monkey (qrcode-monkey.com)
- **Settings**:
  - Error correction: High (30%)
  - Size: 300x300px minimum
  - Format: SVG or PNG
  - Include logo: Optional (AI4Love heart logo)

### QR Code URLs
For JBHF: `https://ai4love.com/demo/JBHF`

### Testing QR Codes
1. Generate QR code
2. Test with iPhone (Safari)
3. Test with Android (Chrome)
4. Verify correct page loads
5. Test form submission

## Form Submission Setup

### Current Implementation
Forms currently log to console. To enable email/database integration:

### Option 1: Email Integration (Recommended for Quick Start)

#### Using Resend (Recommended)
1. Install Resend:
   ```bash
   npm install resend
   ```

2. Add to `.env.local`:
   ```
   RESEND_API_KEY=your_api_key_here
   ```

3. Update `/src/pages/api/submit-feedback.ts`:
   ```typescript
   import { Resend } from 'resend'
   const resend = new Resend(process.env.RESEND_API_KEY)
   
   await resend.emails.send({
     from: 'AI4Love <noreply@ai4love.com>',
     to: ['scott@ai4love.com', 'your@email.com'],
     subject: `New Feedback from ${organization || 'Demo Page'}`,
     text: emailContent
   })
   ```

#### Using SendGrid
1. Install SendGrid:
   ```bash
   npm install @sendgrid/mail
   ```

2. Add to `.env.local`:
   ```
   SENDGRID_API_KEY=your_api_key_here
   ```

3. Update API endpoints with SendGrid integration

### Option 2: Database Integration

#### Using Airtable
1. Install Airtable:
   ```bash
   npm install airtable
   ```

2. Create Airtable base with tables:
   - **Feedback** (Name, Email, Organization, OrgSlug, Resonated, Useful, Concerns, FollowUp, Other, Timestamp)
   - **Subscribers** (Email, LaunchPartner, OrgSlug, Timestamp)

3. Add to `.env.local`:
   ```
   AIRTABLE_API_KEY=your_api_key_here
   AIRTABLE_BASE_ID=your_base_id_here
   ```

#### Using Google Sheets
1. Install Google Sheets API:
   ```bash
   npm install googleapis
   ```

2. Set up Google Service Account
3. Share sheet with service account email
4. Update API endpoints with Sheets integration

### Option 3: Supabase (Already in Project)
The project already has Supabase installed. To use it:

1. Create tables in Supabase:
   ```sql
   CREATE TABLE feedback (
     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
     name TEXT,
     email TEXT,
     organization TEXT,
     org_slug TEXT,
     resonated TEXT,
     useful TEXT,
     concerns TEXT,
     follow_up TEXT,
     other TEXT,
     created_at TIMESTAMP DEFAULT NOW()
   );
   
   CREATE TABLE subscribers (
     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
     email TEXT NOT NULL,
     launch_partner BOOLEAN DEFAULT FALSE,
     org_slug TEXT,
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

2. Update API endpoints to use Supabase client

## Analytics Setup

### Google Analytics
1. Add GA4 tracking ID to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

2. Add to `_app.tsx`:
   ```typescript
   import Script from 'next/script'
   
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
     strategy="afterInteractive"
   />
   ```

### Track QR Code Scans
Add UTM parameters to QR code URLs:
- `https://ai4love.com/demo/JBHF?utm_source=qr_coaster&utm_medium=physical&utm_campaign=advisor_meetings`

## Coaster Design Specifications

### QR Code Placement
- **Size**: 1.5" x 1.5" minimum
- **Position**: Center or bottom-right of coaster
- **Contrast**: Ensure high contrast with background
- **Call to Action**: "Scan to share your thoughts" or "Your feedback shapes AI4Love"

### Branding
- Include AI4Love logo
- Use brand colors (#ec3b25 red, #231f20 black)
- Keep design clean and minimal

## Testing Checklist

### Pre-Launch
- [ ] QR code scans correctly on iOS
- [ ] QR code scans correctly on Android
- [ ] Page loads in under 2 seconds
- [ ] Forms submit successfully
- [ ] Email notifications arrive (if configured)
- [ ] Data saves to database (if configured)
- [ ] Mobile responsive (320px width minimum)
- [ ] All links functional
- [ ] Privacy policy accessible
- [ ] Analytics tracking works

### Post-Launch Monitoring
- [ ] Monitor form submission rate
- [ ] Check email deliverability
- [ ] Review feedback quality
- [ ] Track conversion metrics
- [ ] Monitor page load times

## Success Metrics

Track these KPIs:
1. **QR Scan Rate**: Coasters distributed → Page visits
2. **Feedback Conversion**: Page visits → Form submissions
3. **Email Signup Rate**: Page visits → Email subscriptions
4. **Engagement Quality**: Average time on page, fields completed
5. **Follow-up Interest**: % selecting "Yes" for follow-up

## Customization Guide

### Adding New Form Fields
Edit `/src/pages/demo/[slug].tsx`:

1. Add to state:
   ```typescript
   const [feedbackForm, setFeedbackForm] = useState({
     // ... existing fields
     newField: ''
   })
   ```

2. Add form input in JSX
3. Update API endpoint to handle new field

### Changing Brand Colors
Edit `/tailwind.config.js`:
```javascript
colors: {
  'brand-red': '#ec3b25',  // Change this
  'brand-black': '#231f20', // Change this
}
```

### Adding Resources
Edit the "Resources" section in `/src/pages/demo/[slug].tsx`:
```typescript
<div className="p-6 bg-white rounded-lg border-2 border-gray-200">
  <h3>New Resource</h3>
  <p>Description</p>
  <a href="/path">Download →</a>
</div>
```

## Troubleshooting

### QR Code Not Working
- Verify URL is correct and accessible
- Check QR code error correction level
- Test with multiple devices
- Ensure sufficient contrast

### Forms Not Submitting
- Check browser console for errors
- Verify API endpoints are accessible
- Check network tab for failed requests
- Ensure environment variables are set

### Email Notifications Not Arriving
- Check spam folder
- Verify API keys are correct
- Check email service logs
- Verify sender domain is verified

### Page Loading Slowly
- Optimize images
- Check bundle size
- Enable caching
- Use CDN for static assets

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables Needed
```
RESEND_API_KEY=xxx (or SENDGRID_API_KEY)
AIRTABLE_API_KEY=xxx (optional)
AIRTABLE_BASE_ID=xxx (optional)
NEXT_PUBLIC_GA_ID=xxx (optional)
```

## Support

For questions or issues:
- **Email**: scott@ai4love.com
- **Documentation**: This file
- **Code Location**: `/src/pages/demo/[slug].tsx`

## Next Steps

1. **Choose integration method** (Email service + Database)
2. **Set up environment variables**
3. **Update API endpoints** with chosen integrations
4. **Generate QR codes** for each organization
5. **Test thoroughly** on multiple devices
6. **Print coasters** with QR codes
7. **Monitor and iterate** based on feedback

---

**Built with care by AI4Love** ♥
