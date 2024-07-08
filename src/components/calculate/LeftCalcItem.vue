<script lang="ts" setup>
import Field from '../Field.vue';         
import TimeField from '../calculate/TimeField.vue'
import DateField from '../calculate/DateField.vue'


</script>

<template>
   <div class="w-full text-white mt-5 p-9">
      <div class="flex items-center gap-7 mb-5">
         <span class="font-bold text-[28px]">Калькулятор</span>
         <span class="bg-red-600 px-2 py-1 rounded-lg">- 35 %</span>

      </div>   

      <div class="bg-white rounded-lg shadow shadow-secondary w-full text-text p-9 flex flex-col gap-5">
         <div class="font-bold">Маршрут</div>  
         <Field label="Откуда"/> 
         <Field label="Куда"/>   
         <TimeField />
         <DateField />         

      </div>

   </div>
</template>
