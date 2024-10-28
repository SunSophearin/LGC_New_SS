<script setup lang="ts">
const sldieList = ref();

const { data: slide }: any = await useFetch(
  "https://la3la3.com/shop-api/home/api/get-slide.php"
);
sldieList.value = JSON.parse(slide.value);

</script>
<template>
    <div class="" >
      <el-carousel motion-blur height="400px">
        <el-carousel-item v-for="item in sldieList" :key="item"  >
          <img :src="item.img" alt="" class="w-full h-full object-center" />
        </el-carousel-item>
      </el-carousel>
    </div>
    
  </template>
 