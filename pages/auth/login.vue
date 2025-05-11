<script lang="ts" setup>
import { object, string } from 'yup';

definePageMeta({
	middleware: ['guest'],
	layout: false,
});

useHead({
	title: 'Login',
});

const router = useRouter();
const authStore = useAuthStore();
const showPass = ref<boolean>(false);
const loading = ref<boolean>(false);
const errorMessage = ref<string>('');

const schema = object({
	usuario: string().required('Campo requerido'),
	password: string().required('Campo requerido'),
});

const dataForm = reactive({
	usuario: '',
	password: '',
});

const onSubmit = async () => {
	loading.value = true;
	const response = await authStore.login(dataForm.usuario, dataForm.password);
	if (response.success) {
		router.push('/');
	}
	errorMessage.value = response.message || '';
	loading.value = false;
};
</script>

<template>
	<div class="flex w-full min-h-screen h-full">
		<div class="relative flex items-center w-full max-w-[520px] shadow-2xl bg-white">
			<div class="w-[60%] mx-auto">
				<h1 class="font-lexend font-bold text-2xl mb-4">
					Iniciar sesión
				</h1>
				<UAlert
					v-if="Boolean(errorMessage.length)"
					color="error"
					variant="subtle"
					:description="errorMessage"
					icon="i-lucide-circle-x"
					class="mb-4"
				/>
				<UForm
					:schema="schema"
					:state="dataForm"
					@submit="onSubmit"
				>
					<UFormField
						label="Usuario:"
						class="mb-4"
						name="usuario"
						:ui="{
							error: 'mt-1 text-error text-sm',
						}"
						required
					>
						<UInput
							v-model="dataForm.usuario"
							type="text"
							size="lg"
							class="w-full"
							icon="i-lucide-user"
							:ui="{
								base: 'py-2.5',
							}"
							placeholder="Ingresa tu usuario"
						/>
					</UFormField>
					<UFormField
						label="Contraseña:"
						class="mb-4"
						name="password"
						:ui="{
							error: 'mt-1 text-error text-sm',
						}"
						required
					>
						<UInput
							v-model="dataForm.password"
							:type="showPass ? 'text' : 'password'"
							size="lg"
							class="w-full"
							icon="i-lucide-lock-keyhole"
							:ui="{
								trailing: 'pe-1',
								base: 'py-2.5',
							}"
							placeholder="Ingresa tu contraseña"
						>
							<template #trailing>
								<UButton
									color="neutral"
									variant="link"
									size="sm"
									:icon="showPass ? 'i-lucide-eye' : 'i-lucide-eye-off'"
									:aria-pressed="showPass"
									aria-controls="password"
									@click="showPass = !showPass"
								/>
							</template>
						</UInput>
					</UFormField>
					<p class="text-sm text-end text-gray-400 hover:underline hover:cursor-pointer hover:text-blue-700">
						Olvidaste tu contraseña?
					</p>
					<UButton
						class="mt-4 py-2.5"
						type="submit"
						size="lg"
						:loading="loading"
						block
					>
						Ingresar
					</UButton>
				</UForm>
			</div>
			<div class="w-full absolute bottom-2 text-center text-sm text-gray-400">
				Copyright © 2025
			</div>
		</div>
		<div class="wrapper-portada" />
	</div>
</template>

<style scoped>
.wrapper-portada {
	width: 100%;
	background: linear-gradient(60deg, rgba(34, 105, 236, 0.808), rgba(4, 40, 82, 0.829));
}
</style>
