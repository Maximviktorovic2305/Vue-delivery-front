<script lang="ts" setup>
import { useVariantsStore } from '../../store';


const store = useVariantsStore()


</script>

<template>
	<div class="flex flex-col gap-3 w-full pl-9">
		<div class="font-bold text-[24px] mb-5">{{ store.catalogItem.header }}</div>
		<img class="w-[800px] h-[200px] object-contain" :src="store.catalogItem.img" alt="variants" />
		<div class="font-bold">{{ store.catalogItem.title }}</div>
		<div>{{ store.catalogItem.description }}</div>
	</div>
</template>
