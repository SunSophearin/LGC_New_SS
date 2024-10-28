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
          <h1 class="text-center text-[9px] lg:text-lg">BEST SELLER</h1>
          <h3 class="text-center text-[9px] lg:text-lg">
            TOP PRODUCT OF THIS WEEK
          </h3>
        </div>
      </el-divider>
    </div>
    <ProductHome />
  </div>
</template>
