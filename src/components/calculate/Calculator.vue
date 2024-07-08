<script lang="ts" setup>
	import Container from '../Container.vue'
   import LeftCalcItem from './LeftCalcItem.vue'
   import RightCalcItem from './RightCalcItem.vue'
</script>

<template>
	<Container class="h-[550px] bg-[#1e1e1e] shadow-lg shadow-text rounded-lg overflow-hidden flex gap-7">
      <LeftCalcItem class="w-[40%]" />
      <RightCalcItem class="w-[60%]" />
   </Container>
</template>

<style scoped>
	/* .bg {
		background: linear-gradient(180deg, #a2a2a2 0%, #e9e7ea 100%);
	} */
</style>
