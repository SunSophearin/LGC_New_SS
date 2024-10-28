<script setup lang="ts">
const slideCatagoryList = ref<any>([]);
const { data: slideCatagory }: any = await useFetch(
  "https://la3la3.com/shop-api/home/api/get-category.php"
);
slideCatagoryList.value = JSON.parse(slideCatagory.value);
</script>
<template>
  <div >
    <div
      class="grid grid-cols-2 p-1 ms:grid-cols-2 lg:grid-cols-4 gap-4  "
    >
      <div v-for="item in slideCatagoryList" :key="item" class="relative  group">
        <img :src="item.img" alt="" class=" w-full h-full object-fill  overflow-hidden group-hover:scale-105 transform duration-150
        p-1 group-hover:bg-gradient-to-r from-blue-700 to-red-400 rounded-2xl group-hover:duration-150 
        " />
        <h1
        v-on:click="$router.push(`/products/${item.id}/catagory`)"
          class="cursor-pointer font-sixtyfour absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black bg-white opacity-90 w-[70%] text-center block p-1 rounded-lg
           group-hover:bg-gradient-to-r from-blue-700 to-red-400 group-hover:text-white group-hover:transform group-hover:duration-150 
          "
        >
          {{ item.name }}
        </h1>
      </div>
    </div>
  </div>
</template>
