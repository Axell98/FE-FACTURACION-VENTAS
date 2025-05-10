<script lang="ts" setup>
const authStore = useAuthStore();

const items = ref([
	{
		label: 'Mi perfil',
		icon: 'i-lucide-user',
	},
	{
		label: 'Configuración',
		icon: 'i-lucide-cog',
	},
	{
		type: 'separator' as const,
	},
	{
		label: 'Cerrar sesión',
		icon: 'i-lucide-log-out',
		onSelect(e: Event) {
			e.preventDefault();
			authStore.logout();
		},
	},
]);
</script>

<template>
	<header class="fixed top-0 flex items-center w-full h-[65px] px-3 bg-white border-b border-gray-300">
		<p>Sistema de Facturación</p>
		<div class="ms-auto flex items-center gap-1.5">
			<UButton
				color="neutral"
				variant="ghost"
				size="lg"
			>
				<UIcon
					name="i-lucide-bell"
					class="size-5"
				/>
			</UButton>
			<UButton
				color="neutral"
				variant="ghost"
				size="lg"
			>
				<UIcon
					name="i-lucide-circle-help"
					class="size-5"
				/>
			</UButton>
			<UDropdownMenu
				:items="items"
				:content="{
					align: 'end',
				}"
				:ui="{
					content: 'w-48 p-1.5',
					item: 'py-2.5',
				}"
			>
				<UButton
					color="neutral"
					variant="ghost"
					class="hover:cursor-pointer"
				>
					<UAvatar
						alt="Axel Valle"
						size="md"
					/>
					<div class="text-start text-sm ms-3">
						<p class="font-bold">
							Axel Valle.
						</p>
						<p class="text-gray-400">
							Administrador
						</p>
					</div>
					<UIcon
						name="i-lucide-chevron-down"
						class="size-5"
					/>
				</UButton>
			</UDropdownMenu>
		</div>
	</header>
</template>
