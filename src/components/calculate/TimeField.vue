<script lang="ts" setup>
	import { ref } from 'vue'
	import { timeItems } from '../../constants'

	const activeIndex = ref(1)

	const setActiveIndex = (index: number) => {
		activeIndex.value = index
		console.log(activeIndex.value)
	}
</script>

<template>
	<div class="flex items-center gap-5 justify-between">
		<span class="font-bold">Время подачи</span>

		<div class="flex items-center gap-3 text-white">
			<div
				@click="setActiveIndex(index)"
				v-for="(item, index) of timeItems"
				:key="index"
				:class="[
					'inline px-3 py-2 text-text rounded duration-300 shadow cursor-pointer shadow-secondary',
					activeIndex === index ? 'bg-primary text-white' : '',
				]">
				{{ item }}
			</div>
		</div>
	</div>
</template>
