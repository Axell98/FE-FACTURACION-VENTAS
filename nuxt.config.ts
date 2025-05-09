// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@pinia/nuxt', '@vueuse/nuxt', '@nuxt/ui', '@nuxtjs/google-fonts', '@vee-validate/nuxt'],
	ssr: false,
	imports: {
		dirs: ['store', 'composables/**', 'utils/**'],
	},
	devtools: { enabled: false },
	css: ['~/assets/css/main.css'],
	runtimeConfig: {
		public: {
			urlApi: process.env.BASE_API_URL,
			stage: process.env.STAGE,
		},
	},
	compatibilityDate: '2024-11-01',
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
				quotes: 'single',
			},
		},
	},
	googleFonts: {
		families: {
			'Inclusive+Sans': [400, 500, 700],
		},
	},
	veeValidate: {
		autoImports: true,
		componentNames: {
			Form: 'VeeForm',
			Field: 'VeeField',
			ErrorMessage: 'VeeErrorMessage',
		},
	},
});
