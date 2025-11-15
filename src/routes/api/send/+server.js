/* import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { GOOGLE_EMAIL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } from '$env/static/private';

export async function POST({ request }) {
    const data = await request.json();

    const oauth2Client = new google.auth.OAuth2(
        GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET
    );

    oauth2Client.setCredentials({
        refresh_token: GOOGLE_REFRESH_TOKEN
    });

    const accessToken = await oauth2Client.getAccessToken();
    
    console.log("GOOGLE_EMAIL:", GOOGLE_EMAIL);
console.log("GOOGLE_CLIENT_ID:", GOOGLE_CLIENT_ID);
console.log("GOOGLE_CLIENT_SECRET:", GOOGLE_CLIENT_SECRET.substring(0,5));
console.log("GOOGLE_REFRESH_TOKEN:", GOOGLE_REFRESH_TOKEN.substring(0,10));


    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: GOOGLE_EMAIL,
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            refreshToken: GOOGLE_REFRESH_TOKEN,
            accessToken: accessToken.token   // IMPORTANT
        },
    });

    const mailOptions = {
        from: `"Noreply Upsala" <${GOOGLE_EMAIL}>`,
        to: 'divokyvojta@gmail.com',
        subject: 'Form Submission',
        text: JSON.stringify(data, null, 2),
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
    }
}
 */

import { google } from "googleapis";
import { GOOGLE_EMAIL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } from '$env/static/private';

const oauth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET
);

oauth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

const gmail = google.gmail({ version: "v1", auth: oauth2Client });

const raw = Buffer.from(
    `From: ${GOOGLE_EMAIL}\r\nTo: divokyvojta@gmail.com\r\nSubject: Test\r\n\r\nHello!`
).toString("base64").replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

await gmail.users.messages.send({
    userId: 'me',
    requestBody: { raw }
});

console.log("Email sent via Gmail API");
