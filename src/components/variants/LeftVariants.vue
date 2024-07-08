<script lang="ts" setup>
	import { useVariantsStore } from '../../store'

	interface Props {
		title: string
	}

	const { title } = defineProps<Props>()
	const store = useVariantsStore()

	const getTitle = (title: any ) => {
		store.setVariantItem(title.innerText)
	}
</script>

<template>
	<div
		@click="getTitle($event.target)"
		class="flex gap-5 items-center text-[18px] text-secondary cursor-pointer w-full">
		<div
			:class="[
				'p-1.5 rounded-full duration-300 ',
				title == store.catalogItem.title
					? 'bg-primary'
					: 'border border-secondary',
			]"></div>
		<div
			:class="
				title == store.catalogItem.title
					? 'text-primary duration-300 text-[19px]'
					: ''
			">
			{{ title }}
		</div>
	</div>
</template>
