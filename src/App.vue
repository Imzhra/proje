<template>
  <v-app>
    <v-main>
      <div class="h-10 border border-gray-100 rounded m-2">fake nav bar</div>
      <div class="grid grid-cols-6">
        <div class="col-span-2 border border-gray-100 rounded m-2 mt-0">
            Fake Side bar
        </div>
        <div class="col-span-4 border m-2 mt-0 border-gray-100 rounded">
          <FormDetail />
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">

import FormDetail from "./components/ProjectInfo.vue";



</script>
