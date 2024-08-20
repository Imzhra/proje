<template>
    <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
            <div class="div1">
          <h3 style="color: white; text-align: center;">
            <v-icon class="v-icon">mdi mdi-notebook-edit-outline</v-icon>مشخصات پیمان</h3>
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
  
          <div class="div5">
            <v-row>
              <v-col cols="8">
                <v-text-field v-model="contract.ContractorName" variant="none"  dir="rtl" class="v-text"></v-text-field>
              </v-col>
              <v-col cols="4">
                <h4 dir="rtl" style="text-align: right; color: black;">نام پیمانکار/مشاور/آزمایشگاه:</h4>
              </v-col>
            </v-row>
    
    
    <div class="div6">
      <v-row >
        <v-col cols="3">
          <v-text-field v-model="contract.contractFcost" variant="none" type="number" dir="rtl" class="v-text"></v-text-field>
        </v-col>
        <v-col cols="3">
          <h4 dir="rtl" style="text-align: right; color: black;">مبلغ اولیه قرارداد:</h4>
        </v-col>
        <v-col cols="3">
          <v-text-field v-model="contract.contractNo" variant="none" type="number" dir="rtl" class="v-text"></v-text-field>
        </v-col>
        <v-col cols="3">
          <h4 dir="rtl" style="text-align: right; color: black;">شماره قرارداد:</h4>
        </v-col>
        <v-col cols="3">
          <v-text-field v-model="contract.initialContractPRD" variant="none" type="number" dir="rtl" class="v-text"></v-text-field>
        </v-col>
        <v-col cols="3">
          <h4 dir="rtl" style="text-align: right; color: black;">مدت اولیه قرارداد:</h4>
        </v-col>
        <v-col cols="3">
          <v-text-field v-model="contract.contractDate" variant="none" type="date" dir="rtl" class="v-text"></v-text-field>
        </v-col>
        <v-col cols="3">
          <h4 dir="rtl" style="text-align: right; color: black;"> تاریخ قرارداد:</h4>
        </v-col>
      </v-row>
      </div>
      <v-row>
        <v-col cols="6">
          <div class="div7">
            <v-row>
              <v-col cols="6">
                <v-text-field v-model="Base.contractorBase" variant="none" type="text" dir="rtl" class="v-text"></v-text-field>
              </v-col>
              <v-col cols="6">
                <h4 dir="rtl" style="text-align: right; color: black;"> شاخص مبنای پیمان:</h4>
              </v-col>
              <v-col cols="7">
                <v-select v-model="Base.PRD3Month" label="یک سه ماه را انتخاب کنید" :items="['اول','دوم','سوم','چهارم']"></v-select>
              </v-col>
              <v-col cols="7">
                <v-select v-model="Base.year" label="سال را انتخاب کنید" :items="[1400,1401,1402,1403]"></v-select>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="div7">
            <v-row>
              <v-col cols="7">
                <v-text-field v-model="Coefficient.upperHead" variant="none"  dir="rtl" type="number" class="v-text"></v-text-field>
              </v-col>
              <v-col cols="5">
                <h4 dir="rtl" style="text-align: right; color: black;"> ضریب بالاسری</h4>
              </v-col>
              <v-col cols="7">
                <v-text-field v-model="Coefficient.regional" variant="none" type="number" dir="rtl" class="v-text"></v-text-field>
              </v-col>
              <v-col cols="5">
                <h4 dir="rtl" style="text-align: right; color: black;"> ضریب منطقه ای</h4>
              </v-col>
              <v-col cols="7">
                <v-text-field v-model="Coefficient.WorkshopEquipment" variant="none" type="number"  dir="rtl" class="v-text"></v-text-field>
              </v-col>
              <v-col cols="5">
                <h4 dir="rtl" style="text-align: right; color: black;"> ضریب تجهیز کارگاه</h4>
              </v-col>
              <v-col cols="7">
                <v-text-field v-model="Coefficient.ContractorSuggestion" variant="none" type="number"  dir="rtl" class="v-text"></v-text-field>
              </v-col>
              <v-col cols="5">
                <h4 dir="rtl" style="text-align: right; color: black;"> ضریب پیشنهادی پیمانکار</h4>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6"></v-col>
        <v-col cols="6">
          <div class="div9">
            <v-row>
              <v-col cols="7">
                <v-text-field v-model="Dates.Cnotification" variant="none"  dir="rtl" type="date" class="v-text" ></v-text-field>
              </v-col>
              <v-col cols="5">
                <h4 dir="rtl" style="text-align: right; color: black;"> تاریخ ابلاغ قرارداد</h4>
              </v-col>
              <v-col cols="7">
                <v-text-field v-model="Dates.CfinishDate" variant="none"  dir="rtl" type="date" class="v-text"></v-text-field>
              </v-col>
              <v-col cols="5">
                <h4 dir="rtl" style="text-align: right; color: black;"> تاریخ پایان قرارداد</h4>
              </v-col>
              <v-col cols="7">
                <v-text-field v-model="Dates.firstDeliveryDate" variant="none" type="date" dir="rtl" class="v-text"></v-text-field>
              </v-col>
              <v-col cols="5">
                <h4 dir="rtl" style="text-align: right; color: black;"> تاریخ اولین تحویل زمین</h4>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
   
  </div>
        </div>
          
          
        </v-col>
        <v-col cols="2"></v-col>
    </v-row>
        
        
      
  
     
      
    
          
  </template>
    <script setup lang='ts'>
    import { defineComponent } from 'vue'
    import { ref } from 'vue';
    interface Item{
        Title : String;
        ProjectTitle : String;
  
        ContractorName : String;
        contractNo : number;
        contractFcost :number;
        contractDate : Date | null;
        initialContractPRD : number;
  
        contractorBase :string ;
        PRD3Month : string ;
        year : number ;
  
        upperHead : number;
        regional : number ;
        WorkshopEquipment :number;
        ContractorSuggestion : number ;
  
        Cnotification : Date |null;
        CfinishDate : Date |null ;
        firstDeliveryDate : Date |null;
    }
      const listSub = ref<Partial<Item>>({Title: '' , ProjectTitle: ''});
      const contract = ref<Partial<Item>>({ ContractorName:'', contractNo: 0 ,contractFcost :0,contractDate :null ,initialContractPRD: 0});
      const Base = ref<Partial<Item>>({contractorBase: '' , PRD3Month : '', year : 1400});
      const Coefficient = ref<Partial<Item>>({upperHead: 0 ,regional: 0 ,WorkshopEquipment: 0,ContractorSuggestion: 0});
      const Dates = ref<Partial<Item>>({Cnotification : null, CfinishDate: null , firstDeliveryDate : null})
  
  
  
    
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
    border: solid blue;
    border-radius: 5pt;  
    background-color: orangered; 
    margin-top: 10pt; 
    width: 100%;
}
.v-icon{
    border: solid orange; 
    border-radius: 10pt; 
    color: black;
}
.div2{
    border: solid orangered; 
    width: 100%; 
    margin-top: -15pt;
}
.div3{
    border: 2px solid blue; 
    border-radius: 15pt; 
    margin-top: 3pt;
    margin-left: 10pt;  
    margin-right: 10pt; 
    height:50px;
}
.div5{
    border: 2px solid orangered; 
    margin-top: 5%;
    height: 80%; 
    margin-left: 10pt;  
    margin-right: 10pt; 
    margin-top: 5pt;
    margin-bottom: 5pt;
}
.v-text{
    border: 2px solid gainsboro; 
    border-radius: 10pt;
    height: 50%;
    
}
.div6{
    border: solid gainsboro;
    border-radius: 15pt; 
    height: 15%;
     margin-left: 5pt;  
     margin-right: 5pt;
}
.div7{
    height: 100%; 
    border: solid gainsboro; 
    margin-top: 10%; 
    border-radius: 15pt; 
    margin-left: 10pt;  
    margin-right: 10pt;
}
.div9{
    height: 80%;
     border: solid gainsboro; 
     margin-top: 10%; 
     border-radius: 15pt;
     margin-left: 10pt;  
     margin-right: 10pt;
}
    </style>