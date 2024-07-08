<script lang="ts" setup>   
import { pricesItems } from '../../constants';
import Container from '../Container.vue';
import PriceItem from './PriceItem.vue'

</script>

<template>
   <Container class="flex items-center gap-7 mb-10">

      <PriceItem v-for="item in pricesItems" :key="item.img" :item="item" />   
   </Container>
</template>
