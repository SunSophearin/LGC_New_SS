<script setup lang="ts">
const sldieList = ref<any>([]);
const loading = ref(false);
const getSlideList = async () => {
  loading.value = true;
  const { data: slide, status }: any = await useFetch(
    "https://la3la3.com/shop-api/home/api/get-slide.php"
  );
  sldieList.value = JSON.parse(slide.value);
  await new Promise((resolve) => setTimeout(resolve, 300));
  loading.value = false;
};
getSlideList();
</script>
<template>
  <div>
    <UILoadingSlideHome v-if="loading" />
    <el-carousel v-else motion-blur height="400px">
      <el-carousel-item v-for="item in sldieList" :key="item">
        <img :src="item.img" alt="" class="w-full h-full object-center" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
