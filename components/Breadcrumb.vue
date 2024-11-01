<script setup lang="ts">
const isOpen =useState('isMenuOpen', () => false)
const breadcrumb=ref()
onMounted(() => {
  const state=localStorage.getItem('my-store')
   breadcrumb.value=JSON.parse(state).breadcrumb
})
const links = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Products',
  },
  {
    label: breadcrumb, // use state here
    // label: , // use state here
  }
];
</script>
<template>
  <div class="flex justify-between items-center w-full py-3">

  <UBreadcrumb
    class="ml-5 "
    divider="/"
    :ui="{ label: 'text-ms lg:text-xl ' ,active:'text-blue-500 dark:text-blue-400' }"
    :links="links"
  />
  <div class="text-blue-500 font-sixtyfour px-2 mx-2 border border-blue-500 cursor-pointer hover:bg-blue-400 hover:text-white rounded-lg lg:hidden" @click="isOpen = !isOpen">Filter</div>
  </div>
</template>
