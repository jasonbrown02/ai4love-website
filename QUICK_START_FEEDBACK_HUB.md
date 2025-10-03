# AI4Love Feedback Hub - Quick Start Guide

## 🎯 What's Been Built

A complete feedback collection system for partner meetings, accessible via QR codes on branded coasters.

## 📍 URLs

### Live URLs (after deployment)
- **JBHF**: `https://ai4love.com/demo/JBHF`
- **Generic**: `https://ai4love.com/demo/general`
- **Template**: `https://ai4love.com/demo/[ANY-SLUG]`

### Local Testing
```bash
npm run dev
# Visit: http://localhost:3000/demo/JBHF
```

## ✅ What's Included

### 1. Dynamic Demo Page (`/src/pages/demo/[slug].tsx`)
- ✅ Organization-specific personalization
- ✅ Comprehensive feedback form (7 fields)
- ✅ Email subscription form
- ✅ Resource download section
- ✅ Mobile-first responsive design
- ✅ Brand-consistent styling (Poppins font, #ec3b25 red)

### 2. API Endpoints
- ✅ `/api/submit-feedback` - Handles feedback submissions
- ✅ `/api/subscribe` - Handles email signups

### 3. Privacy Policy (`/src/pages/privacy.tsx`)
- ✅ GDPR compliant
- ✅ CCPA compliant
- ✅ Comprehensive data handling disclosure

### 4. Documentation
- ✅ `FEEDBACK_HUB_SETUP.md` - Complete setup guide
- ✅ `QUICK_START_FEEDBACK_HUB.md` - This file

## 🚀 Next Steps (Choose Your Path)

### Option A: Quick Deploy (Console Logging Only)
**Time: 5 minutes**

1. Deploy to Vercel:
   ```bash
   git add .
   git commit -m "Add feedback hub"
   git push
   ```

2. Generate QR code for: `https://ai4love.com/demo/JBHF`

3. Check server logs for submissions (Vercel dashboard → Functions → Logs)

**Pros**: Immediate deployment
**Cons**: Manual log checking, no automated notifications

### Option B: Email Integration (Recommended)
**Time: 15-20 minutes**

1. Sign up for [Resend](https://resend.com) (free tier: 100 emails/day)

2. Get API key and add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

3. Install Resend:
   ```bash
   npm install resend
   ```

4. Update `/src/pages/api/submit-feedback.ts`:
   ```typescript
   import { Resend } from 'resend'
   const resend = new Resend(process.env.RESEND_API_KEY)
   
   // Replace the console.log section with:
   await resend.emails.send({
     from: 'AI4Love <noreply@ai4love.com>',
     to: ['scott@ai4love.com'],
     subject: `New Feedback from ${organization || 'Demo Page'}`,
     text: emailContent
   })
   ```

5. Do the same for `/src/pages/api/subscribe.ts`

6. Deploy with environment variable in Vercel

**Pros**: Instant email notifications
**Cons**: Requires email service setup

### Option C: Full Database Integration
**Time: 30-45 minutes**

Use Supabase (already installed) or Airtable. See `FEEDBACK_HUB_SETUP.md` for detailed instructions.

## 📱 QR Code Generation

### Quick Method
1. Go to [QR Code Monkey](https://www.qrcode-monkey.com/)
2. Enter URL: `https://ai4love.com/demo/JBHF`
3. Settings:
   - Error correction: High
   - Size: 300x300px
   - Format: PNG or SVG
4. Download and add to coaster design

### Add UTM Tracking (Optional)
Use: `https://ai4love.com/demo/JBHF?utm_source=qr_coaster&utm_medium=physical&utm_campaign=advisor_meetings`

## 🎨 Adding New Organizations

Edit `/src/pages/demo/[slug].tsx` (line 8):

```typescript
const orgData: Record<string, { name: string; sector: string }> = {
  'JBHF': { 
    name: 'Jane Butterfield Hospital Foundation', 
    sector: 'Healthcare'
  },
  'ACME': {
    name: 'ACME Foundation',
    sector: 'Community'
  },
  // Add more here
}
```

Then create QR code for new URL: `https://ai4love.com/demo/ACME`

## 🧪 Testing Checklist

### Before Printing Coasters
- [ ] Test QR code on iPhone (Safari)
- [ ] Test QR code on Android (Chrome)
- [ ] Submit test feedback form
- [ ] Subscribe with test email
- [ ] Verify mobile responsiveness (320px width)
- [ ] Check all links work
- [ ] Confirm privacy policy loads

### Test URLs
```bash
# Local testing
npm run dev

# Test pages:
http://localhost:3000/demo/JBHF
http://localhost:3000/demo/general
http://localhost:3000/privacy
```

## 📊 Tracking Success

### Key Metrics to Monitor
1. **QR Scan Rate**: Coasters → Page visits (use UTM params)
2. **Feedback Conversion**: Visits → Form submissions
3. **Email Signups**: Visits → Subscriptions
4. **Engagement**: Time on page, fields completed

### Where to Check
- **Google Analytics**: Page views, time on page (if configured)
- **Vercel Analytics**: Page performance
- **Email Service**: Delivery rates
- **Database**: Submission data (if configured)

## 🎨 Customization Quick Reference

### Change Brand Colors
Edit `/tailwind.config.js`:
```javascript
colors: {
  'brand-red': '#ec3b25',  // Your primary color
  'brand-black': '#231f20', // Your secondary color
}
```

### Update Contact Email
Search and replace `scott@ai4love.com` in:
- `/src/pages/demo/[slug].tsx`
- `/src/pages/api/submit-feedback.ts`
- `/src/pages/api/subscribe.ts`

### Add PDF Download
1. Add PDF to `/public/` folder (e.g., `/public/ai4love-overview.pdf`)
2. Links in demo page already point to `/ai4love-overview.pdf`

## 🐛 Troubleshooting

### QR Code Not Working
- Verify URL is accessible online (not localhost)
- Check QR code error correction is set to High
- Test with multiple devices

### Forms Not Submitting
- Open browser console (F12) and check for errors
- Verify API routes are deployed
- Check network tab for failed requests

### Page Not Loading
- Clear browser cache
- Check Vercel deployment status
- Verify build completed successfully

## 📞 Support

**Questions?** Check `FEEDBACK_HUB_SETUP.md` for detailed documentation.

**Issues?** 
- Check browser console for errors
- Review Vercel deployment logs
- Test API endpoints directly

---

## 🎉 Ready to Launch?

### Minimal Launch (Today)
1. ✅ Code is ready
2. Deploy to Vercel
3. Generate QR code
4. Print coasters
5. Monitor server logs

### Recommended Launch (This Week)
1. ✅ Code is ready
2. Set up Resend (15 min)
3. Update API endpoints (10 min)
4. Deploy with env vars
5. Generate QR code
6. Print coasters
7. Get email notifications

### Full Launch (Next Week)
1. ✅ Code is ready
2. Set up email service
3. Set up database (Supabase/Airtable)
4. Configure analytics
5. Deploy everything
6. Generate QR codes
7. Print coasters
8. Track all metrics

---

**Built with ♥ by AI4Love**

*Your insights are shaping the future of nonprofit relationship intelligence.*
