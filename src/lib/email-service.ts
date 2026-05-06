/**
 * Email Service
 * Using Nodemailer for reliable email delivery
 */

import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';
import { ContactFormInput } from './validation/contact-schema';

// Email Configuration
const EMAIL_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

// Development mode detection
const DEV_MODE = !process.env.SMTP_USER || !process.env.SMTP_PASS;

// Create transporter
let transporter: Transporter | null = null;

if (!DEV_MODE) {
  transporter = nodemailer.createTransport(EMAIL_CONFIG);
}

interface EmailOptions {
  formData: ContactFormInput;
  recipientEmail: string;
  fromEmail: string;
}

/**
 * Send contact form email
 */
export async function sendContactEmail({
  formData,
  recipientEmail,
  fromEmail,
}: EmailOptions): Promise<{ success: boolean; error?: string }> {
  const { name, email } = formData;

  const mailOptions = {
    from: `"${name}" <${fromEmail}>`,
    to: recipientEmail,
    replyTo: email,
    subject: `Neue Kontaktanfrage von ${name}`,
    html: generateEmailHTML(formData),
    text: generateEmailText(formData),
  };

  // Development mode - log instead of send
  if (DEV_MODE) {
    console.log('\n📧 [DEV MODE] Email würde gesendet werden:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`Von: ${mailOptions.from}`);
    console.log(`An: ${mailOptions.to}`);
    console.log(`Reply-To: ${mailOptions.replyTo}`);
    console.log(`Betreff: ${mailOptions.subject}`);
    console.log('\nNachricht:');
    console.log(mailOptions.text);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    return { success: true };
  }

  // Production mode - send via SMTP
  try {
    if (!transporter) {
      throw new Error('Email transporter not initialized');
    }

    await transporter.sendMail(mailOptions);
    
    console.log(`✅ Email sent successfully to ${recipientEmail}`);
    return { success: true };
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

/**
 * Generate HTML email template
 */
function generateEmailHTML(data: ContactFormInput): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .email-container {
      background-color: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
      color: white;
      padding: 30px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .header p {
      margin: 5px 0 0 0;
      opacity: 0.9;
      font-size: 14px;
    }
    .content {
      padding: 30px;
    }
    .field {
      margin-bottom: 20px;
    }
    .field-label {
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 5px;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .field-value {
      background: #f9fafb;
      padding: 12px;
      border-radius: 6px;
      border: 1px solid #e5e7eb;
      color: #111827;
    }
    .field-value a {
      color: #2563eb;
      text-decoration: none;
    }
    .field-value a:hover {
      text-decoration: underline;
    }
    .message-box {
      background: white;
      padding: 20px;
      border-radius: 6px;
      border-left: 4px solid #2563eb;
      margin-top: 10px;
      white-space: pre-wrap;
      word-wrap: break-word;
      line-height: 1.6;
    }
    .footer {
      background: #f9fafb;
      text-align: center;
      padding: 20px;
      border-top: 1px solid #e5e7eb;
      color: #6b7280;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>🎉 Neue Kontaktanfrage</h1>
      <p>Schmitter Gebäudereinigung</p>
    </div>
    
    <div class="content">
      <div class="field">
        <div class="field-label">👤 Name</div>
        <div class="field-value">${escapeHtml(data.name)}</div>
      </div>
      
      <div class="field">
        <div class="field-label">📧 E-Mail</div>
        <div class="field-value">
          <a href="mailto:${escapeHtml(data.email)}">
            ${escapeHtml(data.email)}
          </a>
        </div>
      </div>
      
      ${data.phone ? `
      <div class="field">
        <div class="field-label">📞 Telefon</div>
        <div class="field-value">
          <a href="tel:${escapeHtml(data.phone)}">
            ${escapeHtml(data.phone)}
          </a>
        </div>
      </div>
      ` : ''}
      
      <div class="field">
        <div class="field-label">💬 Nachricht</div>
        <div class="message-box">${escapeHtml(data.message)}</div>
      </div>
    </div>
    
    <div class="footer">
      <p>Diese Nachricht wurde über das Kontaktformular von schmitter-gebaeudereinigung.de gesendet.</p>
      <p>Zeitpunkt: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}</p>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Generate plain text email
 */
function generateEmailText(data: ContactFormInput): string {
  return `
Neue Kontaktanfrage - Schmitter Gebäudereinigung
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name: ${data.name}
📧 E-Mail: ${data.email}
${data.phone ? `📞 Telefon: ${data.phone}` : ''}

💬 Nachricht:
${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Zeitpunkt: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}
  `.trim();
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

/**
 * Verify email configuration (for testing)
 */
export async function verifyEmailConfig(): Promise<boolean> {
  if (DEV_MODE) {
    console.log('📧 Email service in DEV MODE (no SMTP configured)');
    return true;
  }

  if (!transporter) {
    return false;
  }

  try {
    await transporter.verify();
    console.log('✅ Email service ready');
    return true;
  } catch (error) {
    console.error('❌ Email service error:', error);
    return false;
  }
}
