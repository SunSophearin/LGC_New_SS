
<template>
  <div>
    <div class="grid grid-cols-2 p-1 ms:grid-cols-2 lg:grid-cols-4 gap-4">
      <div v-for="i in 4" :key="i" class="w-full h-[130px] xl:h-[250px] animate-pulse">
      <div
        class="w-full h-full bg-gray-300 rounded-lg dark:bg-gray-600"
      ></div>
    </div>
    </div>
  </div>
</template>
