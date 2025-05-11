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
	<header class="fixed z-10 top-0 flex items-center w-full h-[65px] px-3 bg-white shadow-sm">
		<h1 class="font-lexend text-1xl font-bold">
			Sistema de Facturación
		</h1>
		<div class="ms-auto flex items-center gap-1.5">
			<UChip
				:text="5"
				size="3xl"
				:ui="{
					base: 'px-1.5 py-2',
				}"
			>
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
			</UChip>
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
						src="/images/avatar-men.png"
						size="md"
					/>
					<div class="text-start text-sm ms-3 max-w-[110px]">
						<p class="font-bold truncate">
							{{ authStore.user?.nombre || '-' }}
						</p>
						<p class="text-gray-400 truncate">
							{{ authStore.user?.perfil_nombre || 'Sin perfil' }}
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
