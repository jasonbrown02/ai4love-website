import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const {
      email,
      launchPartner,
      orgSlug,
      timestamp
    } = req.body

    if (!email) {
      return res.status(400).json({ message: 'Email is required' })
    }

    // Email notification content
    const emailContent = `
New Email Subscription from AI4Love Demo Page

Email: ${email}
Launch Partner Interest: ${launchPartner ? 'Yes' : 'No'}
Organization Slug: ${orgSlug || 'N/A'}
Timestamp: ${timestamp}
Tag: Early Advisor
    `.trim()

    // Log to console for debugging
    console.log('=== NEW EMAIL SUBSCRIPTION ===')
    console.log(emailContent)
    console.log('==============================')

    // Send email notification via Resend
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      
      try {
        await resend.emails.send({
          from: 'AI4Love Updates <noreply@ai4love.com>',
          to: ['scott@ai4love.com'], // Add more emails as needed
          subject: `New Subscriber: ${email}`,
          text: emailContent,
        })
        console.log('Email notification sent successfully')
      } catch (emailError) {
        console.error('Error sending email:', emailError)
        // Don't fail the request if email fails
      }
    } else {
      console.warn('RESEND_API_KEY not configured - email notification skipped')
    }

    // TODO: Add to email marketing service (Mailchimp/ConvertKit)
    // TODO: Save to database for tracking

    res.status(200).json({ 
      success: true, 
      message: 'Subscription successful' 
    })
  } catch (error) {
    console.error('Error processing subscription:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Error subscribing' 
    })
  }
}
