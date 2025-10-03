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
      name,
      email,
      organization,
      resonated,
      useful,
      concerns,
      followUp,
      other,
      orgSlug,
      timestamp
    } = req.body

    // Email notification content
    const emailContent = `
New Feedback Submission from AI4Love Demo Page

Organization Slug: ${orgSlug || 'N/A'}
Timestamp: ${timestamp}

--- Contact Information ---
Name: ${name || 'Not provided'}
Email: ${email || 'Not provided'}
Role/Position: ${organization || 'Not provided'}

--- Feedback ---

What resonated with you today?
${resonated || 'Not provided'}

What would make this more useful for your organization?
${useful || 'Not provided'}

What concerns or questions came up?
${concerns || 'Not provided'}

Can we follow up with you as we build this out?
${followUp || 'Not provided'}

Anything else on your mind?
${other || 'Not provided'}

--- End of Feedback ---
    `.trim()

    // Log to console for debugging
    console.log('=== NEW FEEDBACK SUBMISSION ===')
    console.log(emailContent)
    console.log('================================')

    // Send email notification via Resend
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      
      try {
        await resend.emails.send({
          from: 'AI4Love Feedback <noreply@ai4love.com>',
          to: ['scott@ai4love.com', 'jason@ai4love.ca'],
          subject: `New Feedback from ${organization || 'Demo Page'}`,
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

    // TODO: Save to database/Google Sheets/Airtable (optional)
    // Example with Supabase:
    // await supabase.from('feedback').insert({
    //   name, email, organization, org_slug: orgSlug,
    //   resonated, useful, concerns, follow_up: followUp, other
    // })

    res.status(200).json({ 
      success: true, 
      message: 'Feedback submitted successfully' 
    })
  } catch (error) {
    console.error('Error processing feedback:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Error submitting feedback' 
    })
  }
}
