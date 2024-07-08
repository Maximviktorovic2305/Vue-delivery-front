<script lang="ts" setup>
	import { ref } from 'vue'
	import { IRemovals } from '../../types'

	interface Props {
		removal: IRemovals
	}

	const { removal } = defineProps<Props>()
	const { title, img } = removal

	const isShown = ref(false)

	const mouseHover = () => {
		isShown.value = !isShown.value
	}
</script>

<template>
	<div
		@mouseenter="mouseHover"
		@mouseleave="mouseHover"
		class="relative rounded-lg bg-white p-5 flex w-[300px] shadow-md shadow-bgDark h-[120px] hover:scale-105 duration-300 cursor-pointer">
		<div class="font-bold">{{ title }}</div>
		<img class="object-contain w-[200px]" :src="img" alt="img" />
		<div
			v-if="isShown"
			class="absolute h-[80%] w-1 bg-primary top-[11%] left-0"></div>
	</div>
</template>
