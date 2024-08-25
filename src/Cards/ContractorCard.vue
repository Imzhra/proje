<template>
  <div>
    <v-card>
      <v-card-item>
        <TextField prop="مبلغ اولیه قرارداد" v-model="Contract.ContractFirstCost" types="number" class="mt-2 mx-auto w-4/6"></TextField>
        <TextField prop="شماره قرارداد" v-model="Contract.ContractNo" types="number" class="mx-auto w-4/6"></TextField>
        <TextField prop="مدت اولیه قرارداد" v-model="Contract.InitialContract" types="number" class="mx-auto w-4/6"></TextField>
        <TextField prop=" تاریخ قرارداد" v-model="Contract.ContractDate" types="number" class="mx-auto w-4/6"></TextField>
      </v-card-item>
    </v-card>
  </div>
</template>
<script setup lang="ts">
import TextField from "../TextFields/TextField.vue";
import {ref} from "vue";
import Item from "../Items/DetailInterface.ts";

const Contract = ref<Partial<Item>>({ ContractorName:'', ContractNo: 0 ,ContractFirstCost :0,ContractDate :null ,InitialContract: 0});
</script>