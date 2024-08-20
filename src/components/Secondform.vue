
<template >
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <div class="div1">
          <h3 style="color: white; text-align: center;">
            <v-icon class="v-icon">mdi mdi-notebook-edit-outline</v-icon>فهارس بهاي منضم به پيمان</h3>
          
        </div>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
    
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <div class="div2">
            <div class="div3">
      <v-row>
        <v-col cols="10">
          <v-text-field v-model="listSub.Title" variant="none"  dir="rtl"></v-text-field>
        </v-col>
        <v-col cols="2">
          <h4 dir="rtl" style="text-align: right; color: blue;">عنوان طرح:</h4>
        </v-col>
      </v-row>
    </div>
  
    <div class="div3">
      <v-row>
        <v-col cols="10">
          <v-text-field v-model="listSub.ProjectTitle" variant="none"  dir="rtl"></v-text-field>
        </v-col>
        <v-col cols="2">
          <h4 dir="rtl" style="text-align: right; color: blue;">عنوان پروژه:</h4>
        </v-col>
      </v-row>
    </div>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="4">
          <div class="div4">
              <h4>ليست فهارس بهاي منضم به پيمان</h4>
          </div>
      </v-col>
      <v-col cols="4">
          <div class="div4">
              <h4>ليست كليه ي فهارس بها</h4>
          </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="4">
          <div class="div5">
              <v-list>
                  <v-list-item v-for="item in listitem.slice(0,3)" :key="item" :title="item">
  
                  </v-list-item>
              </v-list>
          </div>
      </v-col>
      <v-col cols="4">
          <div class="div5">
              <v-list>
                  <v-list-item v-for="item in listitem" :key="item" :title="item">
  
                  </v-list-item>
              </v-list>
          </div>
      </v-col>
    </v-row>
      </div>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
      
      
   
      
  </template>
  
  <script setup lang="ts">
  
  import { ref } from 'vue';
  interface Item{
      Title : String;
      ProjectTitle : String;
  }
  
  const listitem = ref(['رشته كارهاي دريايي و ساحلي ','رشته توزيع نيروي برق','رشته تجهيزات آب و فاضلاب',
      'رشته سدسازي','رشته بهره‌برداري و نگهداري تاسيسات آب شرب','رشته مرمت بناهاي تاريخي','رشته شبكه جمع‌آوري و انتقال فاضلاب',
      'رشته انتقال و توزيع آب روستايي','رشته چاه','رشته ساخت و ترميم قنات','رشته خطوط انتقال آب','رشته شبكه توزيع آب',
      'رشته آبياري و زهكشي','رشته آبياري تحت فشار'
  ])
  
  const listSub = ref<Item>({Title: '' , ProjectTitle: ''})
  
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
.div1{
    border: solid lightskyblue;
    border-radius: 5pt;  
    background-color: lightskyblue; 
    margin-top: 10pt
}
.v-icon{
    border: solid orange; 
    border-radius: 10pt; 
    color: black;
}
.div2{
    border: solid lightgreen; 
    border-radius: 15pt; 
    height: 100%; 
    width: 100%; 
    margin-top: -15pt;
}
.div3{
    border: 2px solid blue; 
    border-radius: 15pt;
    padding: 10px; 
    margin: 5px;
    height: 5%;
}
.div4{
    border: solid black; 
    text-align: center; 
    width: 100%; 
    margin-top: 10pt;
    background-color:lightskyblue;
}
.div5{
    border: solid black;
    height: 110%;
    width: 100%; 
    margin-top:-20pt; 
    text-align: right;
}
  </style>