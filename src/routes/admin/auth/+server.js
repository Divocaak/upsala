import { ADMIN_PASSWORD } from '$env/static/private';
import { json, error } from '@sveltejs/kit';

export const POST = async ({ request, cookies }) => {
    const { password } = await request.json();

    if (password === ADMIN_PASSWORD) {
        cookies.set('auth', 'true', {
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 // 1 day
        });

        return json({ success: true });
    }

    throw error(401, 'nesprávné heslo');
};
