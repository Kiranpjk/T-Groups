import nodemailer from "nodemailer";
import { COMPANY_INFO } from "@/data/companyData";

export interface QuoteRequestPayload {
  fullName: string;
  companyName: string;
  email: string;
  whatsappPhone: string;
  country: string;
  product: string;
  quantityMT: string;
  packingRequirement: string;
  destinationPort: string;
  preferredIncoterm: string;
  preferredShipmentDate?: string;
  modeOfFreight?: string;
  message?: string;
}

export async function sendQuoteNotification(data: QuoteRequestPayload) {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const toEmail = process.env.NOTIFICATION_EMAIL || COMPANY_INFO.primaryEmail;
  const fromEmail = process.env.SMTP_FROM || `"T Group Inquiries" <${user || "inquiries@tgroupexim.com"}>`;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7f4; margin: 0; padding: 20px; color: #1a2e1f; }
          .container { max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e0ece2; }
          .header { background: linear-gradient(135deg, #0A3E1B 0%, #0F5132 100%); padding: 30px 24px; text-align: center; color: #ffffff; }
          .header h1 { margin: 0 0 6px; font-size: 22px; letter-spacing: 1px; color: #ffffff; }
          .header p { margin: 0; color: #C5A059; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; }
          .body { padding: 28px 24px; }
          .tag { display: inline-block; background: #e8f5ec; color: #0A3E1B; font-weight: 700; font-size: 12px; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; margin-bottom: 18px; border: 1px solid #bce2c6; }
          .table-box { width: 100%; border-collapse: collapse; margin-top: 10px; }
          .table-box tr:nth-child(even) { background-color: #f9fbf9; }
          .table-box td { padding: 12px 14px; font-size: 14px; border-bottom: 1px solid #eef3ee; }
          .table-box td.label { font-weight: 600; color: #4a5d4e; width: 38%; }
          .table-box td.value { font-weight: 700; color: #07170E; }
          .message-box { background: #fdfaf2; border-left: 4px solid #C5A059; padding: 14px 16px; margin-top: 20px; border-radius: 0 8px 8px 0; font-size: 14px; line-height: 1.6; }
          .footer { background: #07170E; padding: 20px; text-align: center; font-size: 12px; color: #8fa893; }
          .footer a { color: #C5A059; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>T GROUP IMPORTS & EXPORTS</h1>
            <p>New International RFQ Inbound</p>
          </div>
          <div class="body">
            <span class="tag">⚡ Priority Export Lead</span>
            <p style="font-size: 15px; line-height: 1.5; margin-bottom: 20px;">
              A prospective international buyer has submitted a Request for Quotation (RFQ) on your website.
            </p>

            <table class="table-box">
              <tr>
                <td class="label">Buyer Name</td>
                <td class="value">${data.fullName}</td>
              </tr>
              <tr>
                <td class="label">Company Name</td>
                <td class="value">${data.companyName}</td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td class="value"><a href="mailto:${data.email}" style="color:#0F5132;">${data.email}</a></td>
              </tr>
              <tr>
                <td class="label">WhatsApp / Phone</td>
                <td class="value"><a href="https://wa.me/${data.whatsappPhone.replace(/[^0-9]/g, '')}" style="color:#0F5132;">${data.whatsappPhone}</a></td>
              </tr>
              <tr>
                <td class="label">Destination Country</td>
                <td class="value">${data.country}</td>
              </tr>
              <tr>
                <td class="label">Product Requested</td>
                <td class="value" style="color:#0A3E1B;">${data.product}</td>
              </tr>
              <tr>
                <td class="label">Required Quantity</td>
                <td class="value">${data.quantityMT} MT</td>
              </tr>
              <tr>
                <td class="label">Packing Specification</td>
                <td class="value">${data.packingRequirement || 'Standard Export Packing'}</td>
              </tr>
              <tr>
                <td class="label">Destination Seaport / Airport</td>
                <td class="value">${data.destinationPort || 'Not specified'}</td>
              </tr>
              <tr>
                <td class="label">Preferred Incoterm</td>
                <td class="value" style="color:#C5A059;">${data.preferredIncoterm || 'FOB / CIF'}</td>
              </tr>
              <tr>
                <td class="label">Estimated Shipment Date</td>
                <td class="value">${data.preferredShipmentDate || 'Immediate / Flexible'}</td>
              </tr>
              <tr>
                <td class="label">Freight Mode</td>
                <td class="value">${data.modeOfFreight || 'Sea FCL / Reefer'}</td>
              </tr>
            </table>

            ${data.message ? `
              <div class="message-box">
                <strong style="color:#785616; display:block; margin-bottom:6px;">Buyer Notes & Specific Instructions:</strong>
                ${data.message.replace(/\n/g, '<br/>')}
              </div>
            ` : ''}
          </div>
          <div class="footer">
            <p style="margin:0 0 6px;">T Group Imports & Exports Web Portal Automated Notification</p>
            <p style="margin:0;">Navi Mumbai, Maharashtra, India • <a href="mailto:${toEmail}">${toEmail}</a></p>
          </div>
        </div>
      </body>
    </html>
  `;

  // If SMTP credentials exist, send real email
  if (host && user && pass) {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const info = await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `🚨 [Export RFQ] ${data.product} - ${data.quantityMT} MT for ${data.companyName} (${data.country})`,
      html: htmlContent,
    });

    return { success: true, messageId: info.messageId, mode: 'smtp_sent' };
  } else {
    // In demo / test mode without configured env credentials, log gracefully
    console.log("📨 [DEMO EMAIL NOTIFICATION - SMTP not configured yet]");
    console.log(`Buyer: ${data.fullName} | Company: ${data.companyName} | Country: ${data.country}`);
    console.log(`Product: ${data.product} | Qty: ${data.quantityMT} MT | Port: ${data.destinationPort}`);
    return { success: true, mode: 'demo_logged' };
  }
}
