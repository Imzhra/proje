<template>
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
</template>
<script setup lang="ts">
import IProject from '../Items/DetailInterface.ts'
import TextField from "../TextFields/TextField.vue";

const contract = defineModel<IProject>({default : {} as IProject})


</script>