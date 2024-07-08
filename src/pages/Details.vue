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
		<div>
			<div class="flex justify-between items-center">
				<RouterLink to="/">
					<Button
						class="my-9 text-white bg-secondary shadow-lg shadow-text w-[150px]"
						>На главную</Button
					>
				</RouterLink>
				<div class="flex gap-10 w-full pl-[50px]">
					<span class="text-[18px] font-bold text-secondary"
						>Сайт создан <br />
						с помощью:
					</span>
					<div class="flex gap-[40px]">
						<div class="flex items-center gap-3">
							<img class="w-10 h-10" src="/site/vue.png" alt="site" />
							<span class="text-[18px]"> Vue3 </span>
						</div>
						<div class="flex items-center gap-3">
							<img class="w-10 h-10" src="/site/pinia.svg" alt="site" />
							<span class="text-[18px]">Pinia</span>
						</div>
						<div class="flex items-center gap-3">
							<img class="w-10 h-10" src="/site/tailwind.png" alt="site" />
							<span class="text-[18px]">Tailwindcss</span>
						</div>
						<div class="flex items-center gap-3">
							<img class="w-10 h-10" src="/site/ts.svg" alt="site" />
							<span class="text-[18px]">Typescript</span>
						</div>
						<div class="flex items-center gap-3">
							<img class="w-10 h-10" src="/site/vite.svg" alt="site" />
							<span class="text-[18px]">Vite</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Advantages />
		<Slider />
		<Variants />
	</Container>
</template>
