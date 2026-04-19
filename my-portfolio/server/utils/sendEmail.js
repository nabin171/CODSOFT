import nodemailer from "nodemailer";

export const sendEmail = async (name, email, subject, message) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const year = new Date().getFullYear();

  // ✅ Confirmation email sent to the visitor
  await transporter.sendMail({
    from: `"Nabin Karki" <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: `Got your message, ${name}! I'll be in touch soon.`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Message Received</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#111827;padding:36px 40px;text-align:center;">
              <p style="margin:0;font-size:13px;color:#9ca3af;letter-spacing:2px;text-transform:uppercase;">Nabin Karki</p>
              <h1 style="margin:8px 0 0;font-size:26px;color:#ffffff;font-weight:700;">Message Received!</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">

              <p style="margin:0 0 20px;font-size:16px;color:#374151;line-height:1.7;">
                Hi <strong>${name}</strong>,
              </p>

              <p style="margin:0 0 20px;font-size:15px;color:#6b7280;line-height:1.7;">
                Thank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible — usually within <strong style="color:#374151;">1–2 business days</strong>.
              </p>

              <!-- Message Preview Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0;">
                <tr>
                  <td style="background:#f9fafb;border-left:4px solid #111827;border-radius:0 8px 8px 0;padding:20px 24px;">
                    <p style="margin:0 0 8px;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:1.5px;font-weight:600;">Your message</p>
                    <p style="margin:0;font-size:15px;color:#374151;line-height:1.7;">${message}</p>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 32px;font-size:15px;color:#6b7280;line-height:1.7;">
                In the meantime, feel free to explore my work or connect with me on LinkedIn.
              </p>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" style="margin:0 auto 32px;">
                <tr>
                  <td align="center" style="border-radius:8px;background:#111827;">
                    <a href="https://nabinkarki10.com.np" target="_blank"
                      style="display:inline-block;padding:14px 32px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:8px;">
                      View My Portfolio
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Signature -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #e5e7eb;padding-top:24px;margin-top:8px;">
                <tr>
                  <td>
                    <p style="margin:0 0 4px;font-size:15px;color:#374151;line-height:1.7;">
                      Talk soon,<br/>
                      <strong style="font-size:16px;">Nabin Karki</strong><br/>
                      <span style="color:#6b7280;font-size:13px;">Full Stack Developer</span>
                    </p>
                    <table cellpadding="0" cellspacing="0" style="margin-top:12px;">
                      <tr>
                        <td style="padding-right:16px;">
                          <a href="tel:+9779862276291" style="font-size:13px;color:#374151;text-decoration:none;">
                            &#128222; +977 986-227-6291
                          </a>
                        </td>
                        <td>
                          <a href="https://www.linkedin.com/in/nabin-karki-22a872203/" target="_blank"
                            style="font-size:13px;color:#0a66c2;text-decoration:none;font-weight:600;">
                            in LinkedIn
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:24px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.6;">
                You're receiving this because you submitted a contact form at
                <a href="https://nabinkarki10.com.np" style="color:#6b7280;text-decoration:none;">nabinkarki10.com.np</a>.<br/>
                &copy; ${year} Nabin Karki. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
  });

  // ✅ Notification email sent to you (Nabin)
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_FROM}>`,
    to: "karki0008@gmail.com",
    subject: `New message from ${name} — Portfolio Contact`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;max-width:600px;width:100%;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <tr>
            <td style="background:#111827;padding:28px 40px;">
              <p style="margin:0;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:2px;">Portfolio Alert</p>
              <h2 style="margin:6px 0 0;font-size:22px;color:#ffffff;font-weight:700;">New Contact Form Submission</h2>
            </td>
          </tr>

          <tr>
            <td style="padding:36px 40px;">

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                    <span style="font-size:12px;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;">Name</span><br/>
                    <strong style="font-size:15px;color:#111827;">${name}</strong>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                    <span style="font-size:12px;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;">Email</span><br/>
                    <a href="mailto:${email}" style="font-size:15px;color:#2563eb;text-decoration:none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                    <span style="font-size:12px;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;">Subject</span><br/>
                    <strong style="font-size:15px;color:#111827;">${subject}</strong>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;">
                    <span style="font-size:12px;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;">Message</span><br/>
                    <p style="font-size:15px;color:#374151;line-height:1.7;margin:8px 0 0;">${message}</p>
                  </td>
                </tr>
              </table>

              <!-- Quick Reply Button -->
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-radius:8px;background:#2563eb;margin-right:12px;">
                    <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}"
                      style="display:inline-block;padding:12px 28px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:8px;">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer with contact info -->
          <tr>
            <td style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:20px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="text-align:center;">
                    <p style="margin:0 0 8px;font-size:12px;color:#9ca3af;">
                      Sent from your portfolio contact form &mdash; ${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}
                    </p>
                    <p style="margin:0;font-size:12px;color:#6b7280;">
                      <a href="tel:+9779862276291" style="color:#6b7280;text-decoration:none;">+977 986-227-6291</a>
                      &nbsp;&middot;&nbsp;
                      <a href="https://www.linkedin.com/in/nabin-karki-22a872203/" style="color:#0a66c2;text-decoration:none;font-weight:600;">LinkedIn</a>
                      &nbsp;&middot;&nbsp;
                      <a href="https://nabinkarki10.com.np" style="color:#6b7280;text-decoration:none;">nabinkarki10.com.np</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
  });
};
