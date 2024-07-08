<script lang="ts" setup>
import Button from '../../components/Button.vue'
</script>

<template>
	<div class="bg-primary flex gap-10 relative h-[300px]">
		<div class="">
			<img
				class="absolute top-8 left-[100px] w-[500px]"
				src="/advert/car.png"
				alt="car" />
			<img
				class="absolute bottom-0 left-[400px] w-[250px]"
				src="/advert/man.png"
				alt="man" />
			<img
				class="absolute bottom-5 left-10"
				src="/advert/dots.png"
				alt="dots" />
			<img class="absolute top-5 right-10" src="/advert/dots.png" alt="dots" />
		</div>
		<div class="text-white flex flex-col gap-3 items-start absolute right-[500px] w-[300px] top-12">
			<div class="font-bold">
				У вас планируется офисный или квартирный переезд и нужны услуги газели и
				грузчиков? Нет ничего проще!
			</div>
			<div>
				Сотрудничаем с магазинами мебели, строй - материалов и бытовой техники.
			</div>
			<Button v-scroll-to="'#calculator'" class="bg-white text-text px-[54px]">Заказать переезд</Button>
		</div>
	</div>
</template>

<style scoped></style>
