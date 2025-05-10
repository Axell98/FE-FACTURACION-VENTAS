export default defineNuxtPlugin(async () => {
	const authStore = useAuthStore();
	const token = authStore.token;
	if (token && !authStore.isAuthenticated) {
		await authStore.checkAuth();
	}
	else {
		authStore.loading = false;
	}
});
