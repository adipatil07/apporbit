import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "AppOrbit Contact <onboarding@resend.dev>",
      to: "aditya4554patil@gmail.com",
      replyTo: email,
      subject: `New enquiry from ${name}${service ? ` — ${service}` : ""}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:24px;border:1px solid #e2e8f0;border-radius:12px;">
          <h2 style="margin:0 0 20px;color:#1e293b;">New message from AppOrbit website</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;color:#64748b;font-size:14px;width:100px;">Name</td>
              <td style="padding:8px 0;color:#0f172a;font-size:14px;font-weight:600;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#64748b;font-size:14px;">Email</td>
              <td style="padding:8px 0;color:#0f172a;font-size:14px;">
                <a href="mailto:${email}" style="color:#4f46e5;">${email}</a>
              </td>
            </tr>
            ${
              service
                ? `
            <tr>
              <td style="padding:8px 0;color:#64748b;font-size:14px;">Service</td>
              <td style="padding:8px 0;color:#0f172a;font-size:14px;">${service}</td>
            </tr>`
                : ""
            }
          </table>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;" />
          <p style="margin:0;color:#64748b;font-size:14px;">Message</p>
          <p style="margin:8px 0 0;color:#0f172a;font-size:15px;line-height:1.6;">${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
