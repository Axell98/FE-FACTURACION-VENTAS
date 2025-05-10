<script lang="ts" setup>
definePageMeta({
	middleware: 'auth',
});

useHead({
	title: 'Home',
});
</script>

<template>
	<BaseLayout>
		<h1>Sistema de facturación</h1>
	</BaseLayout>
</template>
