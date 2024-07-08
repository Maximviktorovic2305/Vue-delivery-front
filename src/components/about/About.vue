<script lang="ts" setup>
	import { aboutItems } from '../../constants'
	import Container from '../Container.vue'
	import AboutItem from './AboutItem.vue'
</script>

<template>
	<Container>
		<div class="font-bold text-[24px] flex justify-center mb-7">Почему мы?</div>
		<div class="grid grid-cols-3 gap-5">
			<AboutItem
				v-for="aboutItem of aboutItems"
				:aboutItem="aboutItem"
				:key="aboutItem.title" />
		</div>
	</Container>
</template>
