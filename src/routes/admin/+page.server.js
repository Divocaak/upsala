import { redirect } from '@sveltejs/kit';

export const load = ({ cookies }) => {
	const isAuthenticated = cookies.get('auth') === 'true';
	if (!isAuthenticated) {
		throw redirect(303, `/admin/auth`);
	}
	return {};
};
