<script lang="ts" setup>
import { object, string } from 'yup';

useHead({
	title: 'Login',
});

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
	<div class="flex items-center w-full min-h-screen h-full">
		<div class="w-full max-w-[500px]">
			<UForm
				:schema="schema"
				:state="dataForm"
				class="w-[60%] mx-auto"
				@submit="onSubmit"
			>
				<UFormField
					label="Usuario"
					class="mb-4"
					name="usuario"
					required
				>
					<UInput
						v-model="dataForm.usuario"
						type="text"
						placeholder="Ingresa tu usuario"
						class="w-full"
					/>
				</UFormField>
				<UFormField
					label="Contraseña"
					class="mb-4"
					name="password"
					required
				>
					<UInput
						v-model="dataForm.password"
						type="password"
						placeholder="Ingresa tu contraseña"
						class="w-full"
					/>
				</UFormField>
				<UButton
					class="mt-1"
					type="submit"
					block
				>
					Login
				</UButton>
			</UForm>
		</div>
		<div class="w-full bg-green-700 min-h-screen" />
	</div>
</template>
