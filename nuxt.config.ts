// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  imports: {
		dirs: ['store', 'composables/**', 'utils/**'],
	},
  modules: ['@nuxt/eslint', '@pinia/nuxt', '@vueuse/nuxt'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  runtimeConfig: {
		public: {
			urlApi: process.env.BASE_API_URL,
      stage: process.env.STAGE
		},
	},
  css: ['~/assets/css/main.css'],
})
