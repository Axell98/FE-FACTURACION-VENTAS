export default defineNuxtRouteMiddleware(async () => {
	if (import.meta.server) return;
	const authStore = useAuthStore();
	if (authStore.loading) {
		await until(authStore).toMatch(s => !s.loading);
	}
	if (!authStore.isAuthenticated) {
		return navigateTo('/auth/login');
	}
});
