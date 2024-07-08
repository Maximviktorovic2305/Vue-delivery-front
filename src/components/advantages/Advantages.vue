<script lang="ts" setup>
import { advantagesItems } from '../../constants';
import AdvantagesItem from './AdvantagesItem.vue'

</script>

<template>
   <div class="flex items-center justify-between px-[100px] my-4">
      <AdvantagesItem v-for="item of advantagesItems" :key="item.title" :item="item" />         
   </div>
</template>
