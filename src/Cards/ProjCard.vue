<template>
  <div>
    <v-card>
      <v-card-item>
        <TextField v-model="SubList.Title" prop=':عنوان طرح' types="text"></TextField>
        <TextField v-model="SubList.ProjectTitle" prop=':عنوان پروژه' types="text"></TextField>
        <TextField v-model="SubList.ContractorName" prop=':نام پیمانکار/مشاور/آزمایشگاه' types="text"></TextField>
      </v-card-item>
    </v-card>
  </div>
</template>
<script setup lang="ts">

import TextField from "../TextFields/TextField.vue";
import {ref} from "vue";
import Item from "../Types/DetailInterface.ts";

const SubList = ref<Partial<Item>>({Title: '' , ProjectTitle: ''});
</script>