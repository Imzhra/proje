<template>
  <div>
    <v-card>
      <v-card-item>
        <v-list>
          <v-list-item v-for="item in ListItem" :key="item" :title="item">

          </v-list-item>
        </v-list>
      </v-card-item>
    </v-card>
  </div>
</template>

<script setup lang="ts">

  import {ref} from "vue";

  const ListItem = ref(['رشته كارهاي دريايي و ساحلي ','رشته توزيع نيروي برق','رشته تجهيزات آب و فاضلاب',
    'رشته سدسازي','رشته بهره‌برداري و نگهداري تاسيسات آب شرب','رشته مرمت بناهاي تاريخي','رشته شبكه جمع‌آوري و انتقال فاضلاب',
    'رشته انتقال و توزيع آب روستايي','رشته چاه','رشته ساخت و ترميم قنات','رشته خطوط انتقال آب','رشته شبكه توزيع آب',
    'رشته آبياري و زهكشي','رشته آبياري تحت فشار'
  ])
</script>