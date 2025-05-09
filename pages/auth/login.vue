<script lang="ts" setup>
import { object, string } from 'yup';

useHead({
	title: 'Login',
});

const showPass = ref<string>(false);

const schema = object({
	usuario: string().required('Campo requerido'),
	password: string().required('Campo requerido'),
});

const dataForm = reactive({
	usuario: '',
	password: '',
});

const onSubmit = async (event) => {
	console.log(event.data);
};
</script>

<template>
	<div class="flex w-full min-h-screen h-full">
		<div class="w-full relative flex items-center max-w-[500px] min-h-screen shadow-2xl">
			<UForm
				:schema="schema"
				:state="dataForm"
				class="w-[60%] mx-auto"
				@submit="onSubmit"
			>
				<h1 class="text-2xl">
					Iniciar sesión
				</h1>
				<br>
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
				<p class="text-sm text-end text-gray-400 hover:underline hover:cursor-pointer">
					Olvidaste tu contraseña?
				</p>
				<UButton
					class="mt-3 py-2.5"
					type="submit"
					size="lg"
					block
				>
					Ingresar
				</UButton>
			</UForm>
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
	min-height: 100vh;
	background: linear-gradient(60deg, rgba(36, 192, 70, 0.808), rgba(10, 59, 71, 0.87));
}
</style>
