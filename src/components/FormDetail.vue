<template>
  <div class="bg-blue-500 border border-gray-700 text-white p-5">
    <h3 class="text-center">
      <v-icon >mdi mdi-notebook-edit-outline</v-icon>مشخصات پيمان</h3>
  </div>

  <ProjCard class="col-span-10 border-solid border-2"></ProjCard>

    <div class="mt-2 grid grid-cols-2 gap-2">
      <ContractorCard ></ContractorCard>
      <ContractorBaseCard ></ContractorBaseCard>
      <ContractorCoefficientCard></ContractorCoefficientCard>
      <contractor-dates-card></contractor-dates-card>
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