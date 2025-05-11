const useApiAuth = () => {
	const config = useRuntimeConfig();
	const headers = useHeaders();

	const login = async (credentials: { usuario: string; password: string }) => {
		try {
			const response = await fetch(`${config.public.urlApi}/auth/login`, {
				method: 'POST',
				headers,
				body: JSON.stringify(credentials),
				credentials: 'include',
			});
			return await response.json();
		}
		catch (error) {
			console.error('Login error', error);
			return null;
		}
	};

	const profile = async () => {
		try {
			const response = await fetch(`${config.public.urlApi}/auth/profile`, {
				method: 'GET',
				headers,
				credentials: 'include',
			});
			return await response.json();
		}
		catch (error) {
			console.error('Profile error', error);
			return null;
		}
	};

	const logout = async () => {
		try {
			const response = await fetch(`${config.public.urlApi}/auth/logout`, {
				method: 'POST',
				headers,
				credentials: 'include',
			});
			return response.ok;
		}
		catch (error) {
			console.error('Logout error', error);
			return false;
		}
	};

	return { login, profile, logout };
};

export default useApiAuth;
