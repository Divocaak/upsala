import nodemailer from 'nodemailer';
import { GOOGLE_EMAIL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } from '$env/static/private';

export async function POST({ request }) {
    const data = await request.json();

    /* TODO user must match from */
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: GOOGLE_EMAIL,
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            refreshToken: GOOGLE_REFRESH_TOKEN,
        },
    });

    /* TODO from */
    const mailOptions = {
        from: `"Noreply Upsala" <${GOOGLE_EMAIL}>`,
        to: 'recipient@example.com',
        subject: 'Form Submission',
        text: JSON.stringify(data, null, 2),
        html: ""
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
    }
}
