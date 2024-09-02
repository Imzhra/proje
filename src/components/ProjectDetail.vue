<template>
  <div class="grid grid-cols-2 gap-2 border-solid border-2 bg-blue-600 text-white w-8/12 mx-auto pb-5 mt-2">
    <h4 class="col-span-1 mx-auto mt-2">ليست فهارس بهاي منضم به پيمان</h4>
    <h4 class="col-span-1 mx-auto mt-2">ليست كليه ي فهارس بها</h4>
  </div>
  <div class="grid grid-cols-5 gap-2 border-solid border-2   w-8/12 mx-auto mt-2 ">
    <div class="col-span-2">
      <v-card>
        <v-card-item>
          <v-list>
            <v-list-item v-for="item in ListItem" :key="item.Id" :title="item.Title" @click="AddItem(item)">

            </v-list-item>
          </v-list>
        </v-card-item>
      </v-card>
    </div>
    <div class="grid grid-cols-1" >
      <v-icon class="mx-auto">mdi mdi-arrow-collapse-left</v-icon>
      <v-icon class="mx-auto mdi mdi-arrow-collapse-right"
              v-for="item in SelectedItems" :key="item.Id"
              @click="DeleteItem(item.Id)" ></v-icon>
    </div>

    <div class="col-span-2">
      <v-card>
        <v-card-item>
          <v-list>
            <v-list-item  v-for="selectedItem in SelectedItems"
                          :key="selectedItem.Id"
                          :title="selectedItem.Title"

                          >

            </v-list-item>
          </v-list>
        </v-card-item>
      </v-card>
    </div>
  </div>

</template>

<script setup lang="ts">
import {ref} from "vue";
import DeleteItem from "../Scripts/Delete.ts";

const ListItem = ref ([{Id:1,Title:'رشته كارهاي دريايي و ساحلي'},
                {Id:2,Title:'رشته توزيع نيروي برق'},
                {Id:3,Title: 'رشته تجهيزات آب و فاضلاب'},
                {Id:4,Title: 'رشته سدسازي'},
                {Id:5,Title: 'رشته بهره‌برداري و نگهداري تاسيسات آب شرب'},
                {Id:6,Title: 'رشته مرمت بناهاي تاريخي'},
                {Id:7,Title: 'رشته شبكه جمع‌آوري و انتقال فاضلاب'},
                {Id:8,Title: 'رشته انتقال و توزيع آب روستايي'},
                {Id:9,Title: 'رشته چاه'},
                {Id:10,Title: 'رشته ساخت و ترميم قنات'},
                {Id:11,Title: 'رشته خطوط انتقال آب'},
                {Id:12,Title: 'رشته شبكه توزيع آب'},
                {Id:13,Title: 'رشته آبياري و زهكشي'},
                {Id:14,Title: 'رشته آبياري تحت فشار'},
])

const SelectedItems = ref([{Id: 0, Title: ''}])

function AddItem(item: any) {
  if (!SelectedItems.value.includes(item.Title)) {
    SelectedItems.value.push(item);
  }
}

</script>