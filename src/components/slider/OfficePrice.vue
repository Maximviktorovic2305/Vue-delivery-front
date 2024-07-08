<script lang="ts" setup>
	import { IOfficesPriceRemovals } from '../../types'

	interface Props {
		item: IOfficesPriceRemovals
	}

	const { item } = defineProps<Props>()
	const { title, m, maxibus, microbus, minibus } = item
</script>

<template>
	<div class="flex flex-col gap-3 p-6 px-9">
		<div class="flex items-center justify-between mb-3">
			<div class="font-bold">{{ title }}</div>
			<div class="bg-primary rounded-lg shadow-md shadow-text px-3 py-1">{{ m }}</div>
		</div>
		<div class="text-white bg-secondary shadow-md shadow-text rounded-lg flex items-center justify-between">
			<span class="px-3 py-1 w-full">Характеристики</span>
			<span class="border-l px-3 py-1 w-full text-end">Цена</span>
		</div>   
      <div class="text-text rounded-lg flex items-center justify-between">
			<span class="px-3 py-1">Максибус</span>
			<span class="px-3 py-1">{{ maxibus }} р/час</span>
		</div>  
      <div class="text-text rounded-lg flex items-center justify-between">
			<span class="px-3 py-1">Минибус</span>
			<span class="px-3 py-1">{{ microbus }} р/час</span>
		</div>  
      <div class="text-text rounded-lg flex items-center justify-between mb-3">
			<span class="px-3 py-1">Микробус</span>
			<span class="px-3 py-1">{{ minibus }} р/час</span>
		</div>  

	</div>
</template>
