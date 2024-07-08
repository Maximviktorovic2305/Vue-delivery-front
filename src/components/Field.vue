<script lang="ts" setup>
	interface Props {
		label: string
		icon?: string
	}

	const props = defineProps<Props>()
	const { label, icon = '/location.png' } = props
</script>

<template>
	<div class="relative mb-3" data-twe-input-wrapper-init>
		<img class="absolute top-2.5 left-2" :src="icon" alt="location" />
		<input
			type="text"
			class="pl-7 peer block min-h-[auto] shadow-md shadow-secondary w-full rounded border-0 bg-transparent px-3 py-[0.5rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
			:placeholder="label" />
		<label
			class="pointer-events-none absolute left-7 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-transparent transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
			>{{ label }}
		</label>
	</div>
</template>
