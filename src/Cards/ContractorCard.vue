<template>
  <div>
    <v-card>
      <v-card-title>اطلاعات قرارداد</v-card-title>
      <v-card-item class="">
        <div class="mt-2">
          <TextField prop="مبلغ اولیه قرارداد" v-model="Contract.ContractFirstCost" types="number"></TextField>
          <TextField prop="شماره قرارداد" v-model="Contract.ContractNo" types="number"></TextField>
          <TextField prop="مدت اولیه قرارداد" v-model="Contract.InitialContract" types="number"></TextField>
          <!-- <TextField prop=" تاریخ قرارداد" v-model="Contract.ContractDate" types="number"></TextField> -->
          <DatePicker auto-submit label="تاریخ قرارداد" v-model="Contract.ContractDate"></DatePicker>
        </div>

      </v-card-item>
    </v-card>
  </div>
</template>
<script setup lang="ts">
import TextField from "../TextFields/TextField.vue";
import { ref } from "vue";
import Item from "../Items/DetailInterface.ts";

const Contract = ref<Partial<Item>>({ ContractorName: '', ContractNo: 0, ContractFirstCost: 0, ContractDate: null, InitialContract: 0 });
</script>