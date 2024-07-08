<script lang="ts" setup>   
import { IPricesItems } from '../../types';
import Button from '../Button.vue'

interface Props {
   item: IPricesItems
}         

const { item } = defineProps<Props>()   
const { img, title, length, width, height } = item

</script>

<template>
   <div class="w-[360px] h-[720px] rounded-lg shadow-lg border shadow-text overflow-hidden p-5 flex flex-col gap-3 duration-300 hover:scale-105 cursor-pointer">
      <img :src="img" alt="prices" :class="['block mx-auto object-contain h-[180px]', img === '/prices/3.svg' ? 'scale-150' : '']">
      <img src="/prices/m.png" alt="prices">   

      <div class="text-center font-bold">{{ title }}</div>   
      <div class="flex flex-col gap-1">
         <div class="text-white rounded-lg bg-secondary shadow-md shadow-text flex items-center justify-between ">
            <span class="px-5 py-1">Характеристики</span>
            <img class="border-l border-white px-5 py-1" src="/prices/cart.png" alt="cart">
         </div>
         <div class="flex items-center justify-between px-5 py-2">
            <span>Длина</span>
            <span>до {{ length }} м</span>
         </div>
         <div class="flex items-center justify-between px-5 py-2">
            <span>Ширина</span>
            <span>до {{ width }} м</span>
         </div>
         <div class="flex items-center justify-between px-5 py-2">
            <span>Высота</span>
            <span>до {{ height }} м</span>
         </div>
      </div>

      <div class="flex items-center justify-between">
         <span class="text-[26px] font-bold">200 р/час</span>
         <Button class="flex items-center gap-3 text-white shadow-md shadow-text">
            <img src="/prices/car.png" alt="car">
            Заказать</Button>
      </div>

   </div>
</template>
