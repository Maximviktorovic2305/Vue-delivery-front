<script lang="ts" setup>
	import { RouterLink } from 'vue-router';
import Container from '../components/Container.vue'
</script>

<template>
	<Container class="text-[20px] py-[16px] flex items-center justify-between">
		<div class="flex items-center gap-7">
			<RouterLink to="/">

				<img src="/header/menu.png" alt="menu cursor-pointer" />
			</RouterLink>

			<div class="flex items-center gap-3">
				<img
					src="/header/mail.svg"
					alt="mail"
					class="pt-1 w-5 h-5 cursor-pointer" />
				<span class="leading-none cursor-pointer">mail@mail.mail</span>
			</div>
		</div>
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
				<span>8 800 ??? ?? ??</span>
			</div>
		</div>
	</Container>
</template>
