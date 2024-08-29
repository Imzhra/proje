<template>
  <div class="bg-blue-500 border border-gray-700 text-white p-5">
    <h3 class="text-center">
      <v-icon>mdi mdi-notebook-edit-outline</v-icon>
      مشخصات پيمان
    </h3>
  </div>

  <ProjCard class="col-span-10 border-solid border-2"></ProjCard>
  <div class="mt-2 grid grid-cols-2 gap-2">
    <div>
      <v-card>
        <v-card-title>اطلاعات قرارداد</v-card-title>
        <v-card-item class="">
          <div class="mt-2">
            <TextField prop="مبلغ اولیه قرارداد" v-model="contract.ContractFirstCost" types="number"></TextField>
            <TextField prop="شماره قرارداد" v-model="contract.ContractNo" types="number"></TextField>
            <TextField prop="مدت اولیه قرارداد" v-model="contract.InitialContract" types="number"></TextField>
            <!-- <TextField prop=" تاریخ قرارداد" v-model="contract.ContractDate" types="number"></TextField> -->
            <DatePicker auto-submit label="تاریخ قرارداد" v-model="contract.ContractDate"></DatePicker>
          </div>

        </v-card-item>
      </v-card>
    </div>


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

    <ContractorCoefficientCard v-model="contract"></ContractorCoefficientCard>
    <contractor-dates-card v-model="contract"></contractor-dates-card>
  </div>
</template>

<script setup lang='ts'>
import IProject from "../Items/DetailInterface.ts"
import ProjCard from "../Cards/ProjCard.vue";
import ContractorCoefficientCard from "../Cards/ContractorCoefficientCard.vue";
import ContractorDatesCard from "../Cards/ContractorDatesCard.vue";
import TextField from "../TextFields/TextField.vue";
import {ref} from "vue";

const contract = defineModel({default: {} as IProject})
const Years = ref([1400, 1401, 1402, 1403]);
const Months = ref(['اول', 'دوم', 'سوم', 'چهارم']);

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