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
		<div class="w-full bg-white p-3 rounded-md">
			<h1 class="font-bold text-1xl">
				Dashboard
			</h1>
		</div>
	</BaseLayout>
</template>
