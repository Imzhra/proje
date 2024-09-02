
<template>
  <v-text-field :v-model="model"  :label="prop"  :type="types" ></v-text-field>
</template>
<script setup lang="ts">
import {  defineProps , defineModel} from 'vue';

  const model = defineModel();

  const props = defineProps<{
    prop: string;
    types: any;
  }>();

</script>