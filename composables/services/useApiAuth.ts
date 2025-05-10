const useApiAuth = () => {
	const config = useRuntimeConfig();

	const login = async (credentials: { usuario: string; password: string }) => {
		try {
			const response = await fetch(`${config.public.urlApi}/auth/login`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
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

	const profile = async (token: string) => {
		try {
			const response = await fetch(`${config.public.urlApi}/auth/profile`, {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
				},
				credentials: 'include',
			});
			return await response.json();
		}
		catch (error) {
			console.error('Profile error', error);
			return null;
		}
	};

	const logout = async (token: string) => {
		try {
			const response = await fetch(`${config.public.urlApi}/auth/logout`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
				},
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
