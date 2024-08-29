<template>
  <div>
    <v-card>
      <v-card-title>اطلاعات مبنای پیمان</v-card-title>
      <v-card-item>
        <div class="m-2">
          <TextField prop="شاخص مبنای پیمان" v-model="contract.ContractorBase" types="text"></TextField>
          <v-select v-model="contract.Month" label="یک سه ماه را انتخاب کنید" :items="Months"></v-select>
          <v-select v-model="contract.Year" label="سال را انتخاب کنید" :items="Years"></v-select>
        </div>
      </v-card-item>
    </v-card>
  </div>
</template>
<script setup lang="ts">
import TextField from "../TextFields/TextField.vue";
import { ref } from "vue";
import Item from "../Items/DetailInterface.ts";

const Years = ref([1400, 1401, 1402, 1403]);
const Months = ref(['اول', 'دوم', 'سوم', 'چهارم']);

const contract = defineModel<Item>({default : {} as Item})
</script>