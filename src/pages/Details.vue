<script lang="ts" setup>
	import { RouterLink } from 'vue-router'
	import Button from '../components/Button.vue'
	import Container from '../components/Container.vue'
	import Slider from '../components/slider/Slider.vue'
	import Advantages from '../components/advantages/Advantages.vue'
	import Variants from '../components/variants/Variants.vue'
</script>

<template>
	<Container>
		<RouterLink to="/">
			<Button class="my-9 text-white bg-secondary shadow-lg shadow-text">На главную</Button>
		</RouterLink>
		<Advantages />         
		<Slider />   
		<Variants />   
	</Container>
</template>
