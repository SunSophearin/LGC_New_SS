<template>
  <div class="w-full h-[200px] xl:h-[500px] p-2">
    <div class="w-full h-full animate-pulse">
      <div
        class="w-full h-full bg-gray-300 rounded-lg  dark:bg-gray-600"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const loading = ref(true);

onMounted(() => {
  loading.value = true;
});
</script>
