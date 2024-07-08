<script lang="ts" setup>
	import About from '../components/about/About.vue'
	import Advert from '../components/advert/Advert.vue'
	import Calculator from '../components/calculate/Calculator.vue'
	import Delivery from '../components/Delivery.vue'
	import Hero from '../components/hero/Hero.vue'
	import Info from '../components/info/Info.vue'
	import Prices from '../components/prices/Prices.vue'
	import Removals from '../components/removals/Removals.vue'
	import Slider from '../components/slider/Slider.vue'
</script>

<template>
	<div>
		<Hero id="hero" class="pb-[100px]" />
		<Removals class="-mt-[50px] mb-[40px]" />
		<About />
		<Delivery />
		<Advert class="mb-10" />
		<Prices  />
		<Calculator id="calculator" class="mb-10" />
		<Slider id="prices" />
		<Info />
	</div>
</template>
