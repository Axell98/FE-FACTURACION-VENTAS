<script lang="ts" setup>
useHead({
	title: 'Home',
});

const handleViewLogin = () => {
	navigateTo('/auth/login');
};
</script>

<template>
	<div>
		<h1>Sistema de facturación</h1>
		<UButton @click="handleViewLogin">
			Iniciar sesión
		</UButton>
	</div>
</template>
