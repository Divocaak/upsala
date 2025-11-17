import { google } from 'googleapis';
import { GOOGLE_EMAIL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, RECAPTCHA_SECRET_KEY } from '$env/static/private';


function encodeSubject(str) {
    return `=?UTF-8?B?${Buffer.from(str, 'utf-8').toString('base64')}?=`;
}

export async function POST({ request }) {
    try {
        const data = await request.json();

        const verify = await fetch(
            'https://www.google.com/recaptcha/api/siteverify',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    secret: RECAPTCHA_SECRET_KEY,
                    response: data.recaptcha
                })
            }
        );

        const verifyResult = await verify.json();

        if (!verifyResult.success || verifyResult.score < 0.5) {
            return new Response(
                JSON.stringify({ ok: false, error: 'Bot detection failed' }),
                { status: 400 }
            );
        }

        const oauth2Client = new google.auth.OAuth2(
            GOOGLE_CLIENT_ID,
            GOOGLE_CLIENT_SECRET
        );

        oauth2Client.setCredentials({
            refresh_token: GOOGLE_REFRESH_TOKEN
        });

        const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

        const boundary = "upsala_boundary";
        const subject = encodeSubject(data.subject || 'No Subject');

        const textPart = data.text || "";
        const htmlPart = data.html || `<p>${data.text || ""}</p>`;

        const targetEmail = "noreply.upsala@gmail.com";
        const rawMessage = [
            `From: Noreply Upsala <${GOOGLE_EMAIL}>`,
            `To: ${targetEmail}`,
            `Subject: ${subject}`,
            'MIME-Version: 1.0',
            `Content-Type: multipart/alternative; boundary="${boundary}"`,
            '',
            `--${boundary}`,
            'Content-Type: text/plain; charset="UTF-8"',
            'Content-Transfer-Encoding: 7bit',
            '',
            textPart,
            '',
            `--${boundary}`,
            'Content-Type: text/html; charset="UTF-8"',
            'Content-Transfer-Encoding: 7bit',
            '',
            htmlPart,
            '',
            `--${boundary}--`,
        ].join('\r\n');

        const encodedMessage = Buffer.from(rawMessage)
            .toString('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');

        await gmail.users.messages.send({
            userId: 'me',
            requestBody: {
                raw: encodedMessage
            }
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (err) {
        console.error('Error sending email via Gmail API:', err);
        return new Response(
            JSON.stringify({ error: 'Failed to send email', details: err.message }),
            { status: 500 }
        );
    }
}
