import { action } from './_generated/server'
import { v } from 'convex/values'
import { Resend } from 'resend'

export const sendConfirmationEmail = action({
  args: {
    name: v.string(),
    business: v.string(),
    phone: v.string(),
    email: v.string(),
    type: v.string(),
    message: v.optional(v.string()),
  },
  handler: async (_, args) => {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.warn('RESEND_API_KEY is not set in Convex environment variables. Email notification skipped.')
      return { success: false, reason: 'RESEND_API_KEY not configured' }
    }

    const resend = new Resend(apiKey)

    const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 32px 16px; }
          .card { max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 20px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
          .header { background: linear-gradient(135deg, #ff6b00 0%, #e65c00 100%); padding: 32px 28px; text-align: center; }
          .logo { font-size: 28px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; }
          .body { padding: 32px 28px; }
          .badge { display: inline-block; background: #fff7ed; color: #ea580c; font-weight: 700; font-size: 12px; padding: 4px 12px; border-radius: 99px; margin-bottom: 16px; }
          h1 { font-size: 22px; font-weight: 800; color: #0f172a; margin: 0 0 12px 0; }
          p { font-size: 15px; line-height: 1.6; color: #475569; margin: 0 0 20px 0; }
          .summary { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 20px; margin: 24px 0; border-left: 4px solid #ff6b00; }
          .summary-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #94a3b8; margin-bottom: 12px; }
          .cta-box { background: #fff7ed; border: 1px solid #ffedd5; border-radius: 14px; padding: 18px; text-align: center; margin-top: 24px; }
          .cta-text { font-size: 14px; font-weight: 600; color: #c2410c; margin: 0; }
          .footer { text-align: center; padding: 24px; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <div style="text-align: center;">
              <img src="https://kaaty.online/logo.jpg" alt="Kaaty Logo" height="44" style="display: inline-block; vertical-align: middle; border-radius: 8px; margin: 0;" />
              <span class="logo" style="display: inline-block; vertical-align: middle; margin-left: 12px;">Kaaty</span>
            </div>
          </div>
          <div class="body">
            <div class="badge">✓ Request Confirmed</div>
            <h1>Your Demo Request is Confirmed, ${args.name.split(' ')[0]}!</h1>
            <p>Thank you for choosing Kaaty. We have received your request for <strong>${args.business}</strong> (${args.type}). Our specialist team is preparing a customized walkthrough tailored to your outlet.</p>
            
            <div class="summary">
              <div class="summary-title">Submission Details</div>
              <div style="line-height: 1.9; font-size: 14px;">
                <div><span style="color:#64748b">Name:</span> <strong>${args.name}</strong></div>
                <div><span style="color:#64748b">Business:</span> <strong>${args.business}</strong></div>
                <div><span style="color:#64748b">Type:</span> <strong>${args.type}</strong></div>
                <div><span style="color:#64748b">Phone:</span> <strong>${args.phone}</strong></div>
                <div><span style="color:#64748b">Email:</span> <strong>${args.email}</strong></div>
                ${args.message ? `<div><span style="color:#64748b">Message:</span> <em>${args.message}</em></div>` : ''}
              </div>
            </div>

            <div class="cta-box">
              <p class="cta-text">Need immediate assistance? Call us directly at <strong>+91 93923 65308</strong></p>
            </div>
          </div>
          <div class="footer">
            © ${new Date().getFullYear()} Benvora Groups Pvt Ltd. All rights reserved.
          </div>
        </div>
      </body>
    </html>
    `

    try {
      const data = await resend.emails.send({
        from: 'Kaaty <hello@kaaty.online>',
        to: [args.email],
        subject: `Demo Request Confirmed — Kaaty (${args.business})`,
        html: htmlContent,
      })
      return { success: true, data }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error)
      console.error('Error sending email via Resend:', error)
      return { success: false, error: message }
    }
  },
})
