<template>
  <div>
    <v-card>
      <v-card-item>
        <TextField prop="تاریخ ابلاغ قرارداد" v-model="Dates.ContractorNotification" types="text" class="mt-2 mx-auto w-4/6"></TextField>
        <TextField prop="تاریخ پایان قرارداد" v-model="Dates.ContractorFinishDate" types="text" class="mx-auto w-4/6"></TextField>
        <TextField prop="تاریخ اولین تحویل زمین" v-model="Dates.FirstDeliveryDate" types="text" class="mx-auto w-4/6"></TextField>

      </v-card-item>
    </v-card>
  </div>
</template>
<script setup lang="ts">
import TextField from "../TextFields/TextField.vue";
import {ref} from "vue";
import Item from "../Types/DetailInterface.ts";
const Dates = ref<Partial<Item>>({ContractorNotification : null, ContractorFinishDate: null , FirstDeliveryDate : null})
</script>