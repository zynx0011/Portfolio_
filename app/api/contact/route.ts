// This API route is currently disabled. To enable contact form functionality, implement your preferred email sending logic here.

import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, company, subject, message } = await req.json();

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return new Response(
                JSON.stringify({ success: false, error: "Missing required fields." }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        // Configure transporter using environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.CONTACT_RECEIVER_EMAIL, // Your receiving email
            subject: `[Portfolio Contact] ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nSubject: ${subject}\nMessage: ${message}`,
            html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Company:</b> ${company}</p><p><b>Subject:</b> ${subject}</p><p><b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}</p>`
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return new Response(
            JSON.stringify({ success: true }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return new Response(
            JSON.stringify({ success: false, error: "Failed to send email." }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

// To use this, add the following environment variables to your .env.local file:
// SMTP_HOST=your_smtp_host
// SMTP_PORT=587
// SMTP_USER=your_smtp_username
// SMTP_PASS=your_smtp_password
// CONTACT_RECEIVER_EMAIL=your@email.com 