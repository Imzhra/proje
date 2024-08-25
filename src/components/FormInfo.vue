<template >

    <div class=" mb-10 border-solid border-2 border-cyan-500 rounded-full place-items-center mt-5 h-10 w-8/12 mx-auto">
      <h3 class="text-center">
        <v-icon >mdi mdi-notebook-edit-outline</v-icon>فهارس بهاي منضم به پيمان</h3>
    </div>

  <TextField types="text" prop="عنوان طرح:" v-model="ListSub.Title" ></TextField>
  <TextField types="text" prop="عنوان پروژه:" v-model="ListSub.ProjectTitle"></TextField>


<div class="grid grid-cols-2 gap-2 border-solid border-2 border-gray-700 rounded-full w-8/12 mx-auto">
  <h4 class="col-span-1 mx-auto">ليست فهارس بهاي منضم به پيمان</h4>
  <h4 class="col-span-1 mx-auto">ليست كليه ي فهارس بها</h4>
</div>
  <div class="grid grid-cols-2 gap-2 border-solid border-2 border-gray-700  w-8/12 mx-auto mt-2 ">
    <ListCard class="col-span-1 mx-auto border-solid border-2 border-cyan-500 mt-2 mb-2 rounded-3xl"></ListCard>
    <ListCard class="col-span-1 mx-auto border-solid border-2 border-cyan-500 mt-2 mb-2 rounded-3xl"></ListCard>
  </div>


</template>

<script setup lang="ts">

import { ref } from 'vue';
import TextField from "../TextFields/TextField.vue";
import ListCard from "../Cards/ListCard.vue";
import Item from "../Types/InfoInterface.ts";


const ListSub = ref<Item>({Title: '' , ProjectTitle: ''})

</script>

<style>

@font-face {
  font-family: 'IRANSansWeb';
  src: url('@/assets/IRANSansWeb.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'IRANSansWeb', sans-serif;
}

</style>