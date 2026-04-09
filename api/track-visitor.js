// api/track-visitor.js - Vercel Serverless Function
// Tracks visitor data and lead submissions, sends Gmail notifications

const nodemailer = require('nodemailer');

// Initialize Gmail transporter once
let transporter = null;

function getGmailTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'muttikavi23@gmail.com',
        pass: process.env.GMAIL_PASSWORD // App-specific password from Google
      }
    });
  }
  return transporter;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body;
    
    // Determine if this is a lead submission or just a visitor
    const isLead = !!(data.name && data.email && data.phone);
    
    // Extract device info
    const userAgent = data.userAgent || '';
    const deviceType = /Mobile|Android|iPhone|iPad|iPod/.test(userAgent) ? 'Mobile' : 'Desktop';
    const browserMatch = userAgent.match(/(Chrome|Safari|Firefox|Edge|Opera)/);
    const browser = browserMatch ? browserMatch[1] : 'Unknown';
    
    // Get visitor IP
    const clientIp = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || 'Unknown';
    
    // Log to console
    console.log(`[${isLead ? 'LEAD' : 'VISITOR'}] ${new Date().toISOString()}`);
    console.log('Data:', JSON.stringify(data, null, 2));
    
    // Send email notification
    if (process.env.GMAIL_PASSWORD) {
      await sendEmailNotification(data, isLead, deviceType, browser, clientIp);
    } else {
      console.log('⚠️  Gmail credentials not configured. Email notifications disabled.');
      console.log('Set GMAIL_USER and GMAIL_PASSWORD in Vercel Environment Variables.');
    }
    
    return res.status(200).json({ 
      success: true, 
      message: isLead ? 'Lead captured successfully' : 'Visitor tracked successfully'
    });
    
  } catch (error) {
    console.error('Handler error:', error);
    return res.status(500).json({ 
      success: false,
      error: error.message 
    });
  }
}

// Send email notification via Gmail
async function sendEmailNotification(data, isLead, deviceType, browser, clientIp) {
  try {
    const transporter = getGmailTransporter();
    
    let subject, htmlContent;
    
    if (isLead) {
      // LEAD SUBMISSION EMAIL
      subject = `🔔 NEW LEAD - ${data.name} (${data.phone})`;
      
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">🎯 NEW LEAD INQUIRY</h2>
            <p style="margin: 5px 0 0 0; font-size: 14px;">Falcon Invisible Grills</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 8px 8px;">
            <h3 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Lead Details</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="background: white;">
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 10px; border: 1px solid #eee;">${data.name || 'N/A'}</td>
              </tr>
              <tr style="background: #fafafa;">
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border: 1px solid #eee;">
                  <a href="https://wa.me/${data.phone?.replace(/[^0-9]/g, '')}" style="color: #667eea; text-decoration: none;">
                    ${data.phone || 'N/A'}
                  </a>
                </td>
              </tr>
              <tr style="background: white;">
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border: 1px solid #eee;">
                  <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">
                    ${data.email || 'N/A'}
                  </a>
                </td>
              </tr>
              <tr style="background: #fafafa;">
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">City:</td>
                <td style="padding: 10px; border: 1px solid #eee;">${data.city || 'N/A'}</td>
              </tr>
              <tr style="background: white;">
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Property Type:</td>
                <td style="padding: 10px; border: 1px solid #eee;">${data.propertyType || 'N/A'}</td>
              </tr>
              <tr style="background: #fafafa;">
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Budget:</td>
                <td style="padding: 10px; border: 1px solid #eee;">${data.budget || 'N/A'}</td>
              </tr>
              <tr style="background: white;">
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Urgency:</td>
                <td style="padding: 10px; border: 1px solid #eee;">
                  <span style="background: ${getUrgencyColor(data.urgency)}; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                    ${data.urgency || 'N/A'}
                  </span>
                </td>
              </tr>
              <tr style="background: #fafafa;">
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Message:</td>
                <td style="padding: 10px; border: 1px solid #eee;">${data.message || 'N/A'}</td>
              </tr>
            </table>
            
            <h3 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-top: 20px;">Device & Location Info</h3>
            
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr style="background: white;">
                <td style="padding: 8px; border: 1px solid #eee; font-weight: bold; width: 30%;">Device:</td>
                <td style="padding: 8px; border: 1px solid #eee;">${deviceType}</td>
              </tr>
              <tr style="background: #fafafa;">
                <td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">Browser:</td>
                <td style="padding: 8px; border: 1px solid #eee;">${browser}</td>
              </tr>
              <tr style="background: white;">
                <td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">IP Address:</td>
                <td style="padding: 8px; border: 1px solid #eee;">${clientIp}</td>
              </tr>
              <tr style="background: #fafafa;">
                <td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">Time:</td>
                <td style="padding: 8px; border: 1px solid #eee;">${new Date(data.timestamp).toLocaleString('en-IN')}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-left: 4px solid #2196F3; border-radius: 4px;">
              <p style="margin: 0; color: #1976D2; font-size: 14px;">
                💡 <strong>Action:</strong> Reply to this email or WhatsApp this lead at 
                <a href="https://wa.me/${data.phone?.replace(/[^0-9]/g, '')}" style="color: #667eea; text-decoration: none;">
                  ${data.phone}
                </a>
              </p>
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px;">
            <p style="margin: 0;">Falcon Invisible Grills | www.falconinvisiblegrill.com</p>
          </div>
        </div>
      `;
    } else {
      // VISITOR TRACKING EMAIL
      subject = `👁️ New Website Visitor - ${new Date(data.timestamp).toLocaleDateString('en-IN')}`;
      
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">👁️ NEW WEBSITE VISITOR</h2>
            <p style="margin: 5px 0 0 0; font-size: 14px;">Falcon Invisible Grills</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 8px 8px;">
            <h3 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Visit Details</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="background: white;">
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; width: 30%;">Page Visited:</td>
                <td style="padding: 10px; border: 1px solid #eee;">${data.url || 'Homepage'}</td>
              </tr>
              <tr style="background: #fafafa;">
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Device:</td>
                <td style="padding: 10px; border: 1px solid #eee;">${deviceType}</td>
              </tr>
              <tr style="background: white;">
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Browser:</td>
                <td style="padding: 10px; border: 1px solid #eee;">${browser}</td>
              </tr>
              <tr style="background: #fafafa;">
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Screen Size:</td>
                <td style="padding: 10px; border: 1px solid #eee;">${data.screen?.width}x${data.screen?.height} px</td>
              </tr>
              <tr style="background: white;">
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Language:</td>
                <td style="padding: 10px; border: 1px solid #eee;">${data.language || 'Unknown'}</td>
              </tr>
              <tr style="background: #fafafa;">
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Timezone:</td>
                <td style="padding: 10px; border: 1px solid #eee;">${data.timezone || 'Unknown'}</td>
              </tr>
              <tr style="background: white;">
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Referrer:</td>
                <td style="padding: 10px; border: 1px solid #eee;">${data.referrer || 'Direct'}</td>
              </tr>
              <tr style="background: #fafafa;">
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">IP Address:</td>
                <td style="padding: 10px; border: 1px solid #eee;">${clientIp}</td>
              </tr>
              <tr style="background: white;">
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Time:</td>
                <td style="padding: 10px; border: 1px solid #eee;">${new Date(data.timestamp).toLocaleString('en-IN')}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 15px; background: #f0f7ff; border-left: 4px solid #2196F3; border-radius: 4px;">
              <p style="margin: 0; color: #1976D2; font-size: 14px;">
                📊 View more analytics in your Vercel dashboard or Google Analytics
              </p>
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px;">
            <p style="margin: 0;">Falcon Invisible Grills | www.falconinvisiblegrill.com</p>
          </div>
        </div>
      `;
    }
    
    // Send email
    const mailOptions = {
      from: process.env.GMAIL_USER || 'muttikavi23@gmail.com',
      to: 'muttikavi23@gmail.com',
      subject: subject,
      html: htmlContent,
      replyTo: isLead ? data.email : undefined
    };
    
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent: ${subject}`);
    
  } catch (error) {
    console.error('❌ Email sending failed:', error.message);
    // Don't throw - let the request succeed even if email fails
  }
}

function getUrgencyColor(urgency) {
  const colors = {
    'Immediate': '#d32f2f',
    'Soon': '#f57c00',
    'Planning': '#f9a825',
    'Exploring': '#1976d2'
  };
  return colors[urgency] || '#999';
}
