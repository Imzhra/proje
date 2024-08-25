<template>
  <div>
    <v-card>
      <v-card-item>
        <TextField prop="ضریب بالاسری" v-model="Coefficient.UpperHead" types="number" class="mt-2 mx-auto w-4/6"></TextField>
        <TextField prop="ضریب منطقه ای" v-model="Coefficient.Regional" types="number"  class="mx-auto w-4/6"></TextField>
        <TextField prop="ضریب تجهیز کارگاه" v-model="Coefficient.WorkShopEquipment" types="number"  class="mx-auto w-4/6"></TextField>
        <TextField prop="ضریب پیشنهاد پیمانکار" v-model="Coefficient.ContractorSuggestion" types="number"  class="mx-auto w-4/6"></TextField>
      </v-card-item>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import TextField from "../TextFields/TextField.vue";
import {ref} from "vue";
import Item from "../Types/DetailInterface.ts";
const Coefficient = ref<Partial<Item>>({UpperHead: 0 ,Regional: 0 ,WorkShopEquipment: 0,ContractorSuggestion: 0});
</script>