<script lang="ts" setup>
	import { ref } from 'vue'
	import { IAboutItems } from '../../types'

	interface Props {
		aboutItem: IAboutItems
	}

	const { aboutItem } = defineProps<Props>()

	const isShown = ref(false)

	const mouseHover = () => {
		isShown.value = !isShown.value
	}
</script>

<template>
	<div
		@mouseenter="mouseHover"
		@mouseleave="mouseHover"
		class="relative hover:scale-105 duration-300 border cursor-pointer rounded-lg shadow-lg shadow-bgDark flex flex-col gap-5 p-5">
		<div class="flex items-center gap-3">
			<img :src="aboutItem.img" :alt="aboutItem.img" />
			<span class="font-bold">{{ aboutItem.title }}</span>
		</div>
		<div>
			{{ aboutItem.description }}
		</div>
		<div
			v-if="isShown"
			class="absolute h-[80%] w-1 bg-primary top-[11%] left-0"></div>
	</div>
</template>
