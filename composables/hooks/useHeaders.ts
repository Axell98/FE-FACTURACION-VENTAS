export const useHeaders = () => {
	const token = useAuthStore()?.token || '';
	const headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': token ? `Bearer ${token}` : '',
	};
	return headers;
};
