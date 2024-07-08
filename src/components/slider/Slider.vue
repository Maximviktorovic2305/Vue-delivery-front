<script lang="ts" setup>
	import Container from '../Container.vue'
	import LeftSlider from './LeftSlider.vue'
	import RightSlider from './RightSlider.vue'
</script>

<template>
	<Container class="p-10 rounded-lg shadow-lg shadow-text flex gap-3 mb-10">
		<LeftSlider class="w-[35%]" />
		<RightSlider class="w-[65%]" />
	</Container>
</template>
