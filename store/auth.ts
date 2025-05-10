import { defineStore } from 'pinia';

interface UserData {
	id: number;
	usuario: string;
	nombre: string;
	perfil: number;
	email: string;
}

interface AuthState {
	user: UserData | null;
	token: string | null;
	isAuthenticated: boolean;
	loading: boolean;
};

export const useAuthStore = defineStore('auth', {
	state: (): AuthState => ({
		user: null,
		token: typeof window !== 'undefined' ? localStorage.getItem('token_auth') : null,
		isAuthenticated: false,
		loading: true,
	}),
	actions: {
		setUser(user: UserData) {
			this.user = user;
			this.isAuthenticated = true;
		},
		setToken(token: string) {
			this.token = token;
			localStorage.setItem('token_auth', token);
		},
		clearAuth() {
			this.user = null;
			this.token = null;
			this.isAuthenticated = false;
			localStorage.removeItem('token_auth');
		},
		loadTokenFromStorage() {
			const token = localStorage.getItem('token_auth');
			if (token)
				this.token = token;
		},
		async login(usuario: string, password: string) {
			const api = useApiAuth();
			const result = await api.login({ usuario, password });
			if (!result) {
				return { success: false, message: 'No se pudo conectar con el servidor.' };
			}
			if (result.status === false) {
				return { success: false, message: 'Usuario y/o contraseña incorrectos.' };
			}
			this.setUser(result.data.userData);
			this.setToken(result.data.accessToken);
			return { success: true };
		},
		async checkAuth() {
			if (!this.token) return false;
			const api = useApiAuth();
			const result = await api.profile(this.token);
			if (!result || result.status === false) {
				this.clearAuth();
				this.loading = false;
				return false;
			}
			this.setUser(result.data.userData);
			this.loading = false;
			return true;
		},
		async logout() {
			if (!this.token) return;
			const api = useApiAuth();
			await api.logout(this.token);
			this.clearAuth();
			await navigateTo('/auth/login');
		},
	},
});
