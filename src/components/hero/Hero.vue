<script lang="ts" setup>
	import { RouterLink } from 'vue-router'
	import Button from '../Button.vue'
	import Container from '../Container.vue'
</script>

<template>
	<div class="bg-bgDark text-white">
		<Container class="flex justify-between items-center">
			<div class="max-w-[50%] flex flex-col gap-3">
				<span class="text-[42px]">Грузоперевозки в </span>
				<span class="text-[42px] font-bold text-primary -mt-3"
					>Москве и России</span
				>
				<span class="mb-7"
					>Доставим малогабаритный и крупногабаритный груз от 50 кг по Москве и
					России по цене ниже рыночной на 10%</span
				>
				<RouterLink to="/details">
					<Button class="flex items-center gap-5 py-3 max-w-[250px]">
						<img src="/hero/price.png" alt="price" />
						Рассчитать стоимость
					</Button>
				</RouterLink>
			</div>

			<div class="relative w-[50%] h-[300px]">
				<img
					class="absolute w-[600px] top-0 left-[50px]"
					src="/hero/1.png"
					alt="hero" />
				<img
					class="absolute w-[500px] top-[80px] left-[120px]"
					src="/hero/2.png"
					alt="hero" />
			</div>
		</Container>
	</div>
</template>
