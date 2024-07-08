<script lang="ts" setup>   
import { removals } from '../../constants';
import RemovalsItem from './RemovalsItem.vue'

</script>

<template>
   <div class="flex items-center gap-7 w-full justify-center" >
      <RemovalsItem v-scroll-to="'#calculator'" :removal="removal" v-for="removal of removals" :key="removal.img" />
   </div>
</template>
