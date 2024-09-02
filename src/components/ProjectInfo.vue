<template>
  <div class="bg-blue-500  text-white p-5">
    <h3 class="text-center">
      <v-icon>mdi mdi-notebook-edit-outline</v-icon>
      مشخصات پيمان
    </h3>
  </div>
  <div class=" w-7/12   mx-auto mt-5">
    <v-card class="w-8/6 mx-auto ">
      <v-card-item >
        <div class="grid grid-cols-2 gap-2">
          <TextField v-model="contract.Title" prop='عنوان طرح:' types="text" class="w-6/6 mt-2"></TextField>
          <TextField v-model="contract.ProjectTitle" prop='عنوان پروژه:' types="text" class="mt-2"></TextField>
          <TextField v-model="contract.ContractorName" prop='نام پیمانکار/مشاور/آزمایشگاه:' types="text"
                     class=" col-span-2"></TextField>
        </div>
      </v-card-item>
    </v-card>
  </div>



  <div class="mt-2 grid grid-cols-2 gap-2 ">
    <div class="col-span-1 ">
      <v-card >
        <v-card-title>اطلاعات قرارداد</v-card-title>
        <v-card-item class="">
          <div class="mt-2 grid grid-cols-2 gap-2">
            <TextField prop="مبلغ اولیه قرارداد" v-model="contract.ContractFirstCost" types="number" class="w-3/4 "></TextField>
            <TextField prop="شماره قرارداد" v-model="contract.ContractNo" types="number" class="w-3/4 "></TextField>
            <TextField prop="مدت اولیه قرارداد" v-model="contract.InitialContract" types="number" class="w-3/4 "></TextField>
            <!-- <TextField prop=" تاریخ قرارداد" v-model="contract.ContractDate" types="number"></TextField> -->
            <div class="w-1/4">
              <DatePicker auto-submit label="تاریخ قرارداد" v-model="contract.ContractDate" class="w-1/4"></DatePicker>
            </div>

          </div>
        </v-card-item>
      </v-card>
    </div>


    <div class="h-150 col-span-1 ">
      <v-card >
        <v-card-title>اطلاعات مبنای پیمان</v-card-title>
        <v-card-item>
          <div class="m-2 grid grid-cols-2 gap-2">
            <TextField prop="شاخص مبنای پیمان" v-model="contract.ContractorBase" types="text" class="col-span-2 w-2/4 mx-auto"></TextField>
            <v-select v-model="contract.Month" label="یک سه ماه را انتخاب کنید" :items="Months"></v-select>
            <v-select v-model="contract.Year" label="سال را انتخاب کنید" :items="Years"></v-select>
          </div>
        </v-card-item>
      </v-card>
    </div>

    <div class= "col-span-1">
      <v-card >
        <v-card-item>
          <div class="grid grid-cols-2">
            <TextField prop="ضریب بالاسری" v-model="contract.UpperHead" types="number" class="w-3/4 "></TextField>
            <TextField prop="ضریب منطقه ای" v-model="contract.Regional" types="number"  class="w-3/4"></TextField>
            <TextField prop="ضریب تجهیز کارگاه" v-model="contract.WorkShopEquipment" types="number"  class="w-3/4"></TextField>
            <TextField prop="ضریب پیشنهاد پیمانکار" v-model="contract.ContractorSuggestion" types="number" class="w-3/4"></TextField>
          </div>

        </v-card-item>
      </v-card>
    </div>

    <div class= "col-span-1">
      <v-card >
        <v-card-item >
          <div class="grid grid-cols-2 gap-5">
            <div class="pl-5">
              <DatePicker auto-submit label="تاریخ ابلاغ قرارداد"
                          v-model="contract.ContractorNotification" class="!w-1/4"></DatePicker>
            </div>

            <div class="mb-3">
              <DatePicker auto-submit label="تاریخ پایان قرارداد"
                          v-model="contract.ContractorFinishDate" class="w-2/4"></DatePicker>
            </div>

            <div class="pr-5">
              <DatePicker auto-submit label="تاریخ اولین تحویل زمین"
                          v-model="contract.FirstDeliveryDate" class="w-2/4"></DatePicker>
            </div>
          </div>


        </v-card-item>
      </v-card>
    </div>
  </div>


</template>

<script setup lang='ts'>
import Item from "../Items/DetailInterface.ts"





import TextField from "../TextFields/TextField.vue";
import {ref} from "vue";
const contract = defineModel({default: {} as Item})
const Years = ref([1400, 1401, 1402, 1403]);
const Months = ref(['اول', 'دوم', 'سوم', 'چهارم']);

</script>

<style>
@font-face {
  font-family: 'IRANSansWeb';
  src: url('../assets/IRANSansWeb.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
body {
  font-family: 'IRANSansWeb', sans-serif;
}
</style>