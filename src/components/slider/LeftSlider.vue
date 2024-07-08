<script lang="ts" setup>
	import {
		Carousel,
		CarouselContent,
		CarouselItem,
		CarouselNext,
		CarouselPrevious,
	} from '../../components/ui/carousel'
	import { pricesItemsDEtails } from '../../constants'
</script>

<template>
	<Carousel class="relative w-full">
		<CarouselContent>
			<CarouselItem v-for="item in pricesItemsDEtails" :key="item.title">
				<div
					class="w-[360px] h-full shadow-lg border shadow-text overflow-hidden p-5 flex flex-col gap-3">
					<img
						:src="item.img"
						alt="prices"
						:class="[
							'block mx-auto object-contain h-[180px]',
							item.img === '/prices/3.svg' ? 'scale-150' : '',
						]" />
					<img src="/prices/m.png" alt="prices" />

					<div class="text-center font-bold">{{ item.title }}</div>
					<div class="flex flex-col gap-1">
						<div
							class="text-white rounded-lg bg-secondary shadow-md shadow-text flex items-center justify-between">
							<span class="px-5 py-1">Характеристики</span>
							<img
								class="border-l border-white px-5 py-1"
								src="/prices/cart.png"
								alt="cart" />
						</div>
						<div class="flex items-center justify-between px-5 py-2">
							<span>Длина</span>
							<span>до {{ item.length }} м</span>
						</div>
						<div class="flex items-center justify-between px-5 py-2">
							<span>Ширина</span>
							<span>до {{ item.width }} м</span>
						</div>
						<div class="flex items-center justify-between px-5 py-2">
							<span>Высота</span>
							<span>до {{ item.height }} м</span>
						</div>
						<div class="flex items-center justify-between px-5 py-2">
							<span>Характеристика 1</span>
							<span>до {{ item.detail_1 }} м</span>
						</div>
						<div class="flex items-center justify-between px-5 py-2">
							<span>Характеристика 2</span>
							<span>до {{ item.detail_2 }} м</span>
						</div>
						<div class="flex items-center justify-between px-5 py-2">
							<span>Характеристика 3</span>
							<span>до {{ item.detail_3 }} м</span>
						</div>
						<div class="flex items-center justify-between px-5 py-2">
							<span>Характеристика 4</span>
							<span>до {{ item.detail_4 }} м</span>
						</div>
					</div>
				</div>
			</CarouselItem>
		</CarouselContent>
		<CarouselPrevious />
		<CarouselNext />
	</Carousel>
</template>
