<script lang="ts" setup>
	import { officesPriceRemovals } from '../../constants'
	import OfficePrice from './OfficePrice.vue'
</script>

<template>
	<div>
		<OfficePrice
			:key="item.m"
			:item="item"
			v-for="item of officesPriceRemovals" />
	</div>
</template>
