<script lang="ts" setup>
	import { variants } from '../../constants'
	import LeftVariants from './LeftVariants.vue'
	import RightVariants from './RightVariants.vue'                           

   
</script>

<template>
	<div class="flex gap-7 mb-[100px] w-full px-[70px]">
		<div class="w-[40%] flex flex-col gap-7 my-auto">
			<LeftVariants
				:title="item.title"
				v-for="item of variants"
				:key="item.title" />
		</div>
		<RightVariants class="w-[60%]" />
	</div>
</template>
