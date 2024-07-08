<script lang="ts" setup>
import Button from './Button.vue';
import Container from './Container.vue';


</script>

<template>
   <Container class="flex p-5 max-w-[600px] my-5">
      <img class="w-[320px]" src="/delivery/delivery.png" alt="delivery">
      <div class="flex flex-col gap-3 ">
         <span class="font-bold pt-9">Доставим все!</span>
         <span class="">Сотрудничаем с магазинами мебели, строй - материалов и бытовой техники.</span>
         <Button v-scroll-to="'#prices'" class="text-white">Заказать доставку</Button>
      </div>
   </Container>
</template>
