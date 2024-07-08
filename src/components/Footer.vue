<script lang="ts" setup>
	import Button from './Button.vue'
	import Container from './Container.vue'
</script>

<template>
	<div class="text-white bg-black">
		<div
			class="bg-[#CBCBCB] pb-3 border border-t-[3px] border-t-primary relative">
			<button v-scroll-to="'#hero'">
				<img
					class="absolute -top-5 right-[200px] bg-primary rounded cursor-pointer shadow-md shadow-text p-2 text-text"
					src="/arrow.png"
					alt="arrow" />
			</button>
			<Container class="flex items-center justify-between">
				<div class="flex items-center gap-3">
					<div class="flex items-center gap-7">
						<img
							class="w-[28px] h-[28px] text-primary cursor-pointer"
							src="/header/od.svg"
							alt="od" />
						<img
							class="w-[28px] h-[28px] cursor-pointer"
							src="/header/vk.svg"
							alt="vk" />
					</div>
					<div class="flex items-center gap-3">
						<img class="cursor-pointer" src="/header/phone.svg" alt="phone" />
						<span class="text-text">8 800 ??? ?? ??</span>
					</div>
				</div>
				<RouterLink to="/details">
					<Button>Оставить заявку</Button>
				</RouterLink>
				<div class="flex items-center gap-3">
					<img
						src="/header/mail.svg"
						alt="mail"
						class="w-5 h-5 cursor-pointer" />
					<span class="leading-none cursor-pointer text-text"
						>mail@mail.mail</span
					>
				</div>
			</Container>
		</div>

		<Container class="flex justify-between max-h-[240px] py-12">
			<div class="flex flex-col gap-5 items-center">
				<img class="w-[97px]" src="/footer/logo.png" alt="logo" />
				<div class="flex items-center gap-3">
					<img class="w-[22px]" src="/footer/od.svg" alt="od" />
					<img class="w-[22px]" src="/footer/vk.svg" alt="vk" />
					<img class="w-[22px]" src="/footer/tg.svg" alt="tg" />
				</div>
			</div>
			<div class="flex flex-col">
				<div class="font-bold">Услуги Грузоперевозки</div>
				<div class="text-[18px] text-slate-700">
					Грузоперевозка авто <br />
					Грузоперевозки <br />
					Перевезти вещи
				</div>
			</div>
			<div class="flex flex-col">
				<div class="font-bold">Услуги Переезда</div>
				<div class="text-[18px] text-slate-700">
					Грузоперевозка авто <br />
					Грузоперевозки <br />
					Перевезти вещи
				</div>
			</div>
			<div class="flex flex-col">
				<div class="font-bold">Услуги Доставки</div>
				<div class="text-[18px] text-slate-700">
					Грузоперевозка авто <br />
					Грузоперевозки <br />
					Перевезти вещи
				</div>
			</div>
		</Container>
	</div>
</template>
