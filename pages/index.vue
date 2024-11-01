<script setup>
import { ref, onMounted } from "vue";
import autoAnimate from "@formkit/auto-animate";
definePageMeta({
  layout: "none",
});
const show = ref(false);
</script>

<template>
  <div>
    <div>
      <SlideHome />
      <SlideCatagory class="my-3" />
    </div>
    <div class="p-5">
      <el-divider>
        <div class="w-full bg-white dark:bg-[#171717] dark:text-white px-5">
          <h1 class="text-center text-xl font-bold text-blue-500 lg:text-2xl">BEST SELLER</h1>
          <h3 class="text-center text-[10px] text-gray-600 dark:text-gray-400 lg:text-lg">
            TOP PRODUCT OF THIS WEEK
          </h3>
        </div>
      </el-divider>
    </div>
    <ProductHome />
  </div>
</template>
