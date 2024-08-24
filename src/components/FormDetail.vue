<template>
  <div class=" mb-10 border-solid border-2 border-cyan-500 rounded-full place-items-center mt-5 h-10 w-8/12 mx-auto">
    <h3 class="text-center">
      <v-icon >mdi mdi-notebook-edit-outline</v-icon>مشخصات پيمان</h3>
  </div>

  <ProjCard class="col-span-10 border-solid border-2 border-emerald-700 rounded-3xl w-8/12 mx-auto"></ProjCard>

    <div class="grid grid-cols-4  w-10/12 mx-auto">
      <ContractorCard class="col-span-2 border-solid border-2 border-emerald-700 rounded-3xl w-5/6 mt-2" ></ContractorCard>
      <ContractorBaseCard class="col-span-2 border-solid border-2 border-emerald-700 rounded-3xl w-5/6 mt-2"></ContractorBaseCard>
      <ContractorCoefficientCard class="col-span-2 border-solid border-2 border-emerald-700 rounded-3xl w-5/6 mt-2" ></ContractorCoefficientCard>
      <contractor-dates-card class=" w-5/6 col-span-2 border-solid border-2 border-emerald-700 rounded-3xl mt-2"></contractor-dates-card>
    </div>

</template>

<script setup lang='ts'>

import ProjCard from "../Cards/ProjCard.vue";
import ContractorCard from "../Cards/ContractorCard.vue";
import ContractorBaseCard from "../Cards/ContractorBaseCard.vue";
import ContractorCoefficientCard from "../Cards/ContractorCoefficientCard.vue";
import ContractorDatesCard from "../Cards/ContractorDatesCard.vue";

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