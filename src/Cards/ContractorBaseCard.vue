<template>
  <div>
    <v-card>
      <v-card-item>
        <TextField prop="شاخص مبنای پیمان" v-model="Base.ContractorBase" types="text" class="mt-2 mx-auto w-4/6"></TextField>
        <v-select v-model="Base.Month" label="یک سه ماه را انتخاب کنید" :items="Months" class="mx-auto w-4/6"></v-select>
        <v-select v-model="Base.Year" label="سال را انتخاب کنید"  :items="Years" class="mx-auto w-4/6"></v-select>
      </v-card-item>
    </v-card>
  </div>
</template>
<script setup lang="ts">
import TextField from "../TextFields/TextField.vue";
import {ref} from "vue";
import Item from "../Types/DetailInterface.ts";
const Base = ref<Partial<Item>>({ContractorBase: '' , Month : '', Year : 1400});

const Years = ref([1400,1401,1402,1403]);
const Months = ref(['اول','دوم','سوم','چهارم']);
</script>