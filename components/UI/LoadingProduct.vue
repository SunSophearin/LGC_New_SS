<template>
  <div>
    <h1 class="w-48 h-5 mt-4 ml-6 p-1 bg-gray-200 rounded-lg dark:bg-gray-700 animate-pulse"></h1>
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2 lg:p-4 animate-pulse"
    >
      <div
        v-for="i in 8"
        :key="i"
        class="h-[280px] md:h-[400px] lg:h-[450px] p-1"
      >
        <div class="w-full h-full">
          <div
            class="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"
          ></div>

          <h1
            class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"
          ></h1>
          <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        </div>
      </div>
    </div>
  </div>
</template>
