<script lang="ts" setup>
import { IAdvantagesItems } from '../../types';

   
interface Props {
   item: IAdvantagesItems
}   

const { item } = defineProps<Props>()   
const { img, title, description } = item   

</script>

<template>
   <div class=" w-[200px] flex flex-col gap-3 justify-center items-center text-center">
      <img :src="img" :alt="img" class="w-[70px]">   
      <div class="font-bold">{{ title }}</div>
      <div class="font-[14px]">{{ description }}</div>
   </div>
</template>
