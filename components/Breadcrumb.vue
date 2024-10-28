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
    :ui="{ label: 'text-ms lg:text-xl' ,active:'primary' }"
    :links="links"
  />
  <div class="text-primary-500 px-2 mx-2 border cursor-pointer hover:bg-green-400 hover:text-white border-primary-500 rounded-lg lg:hidden" @click="isOpen = !isOpen">Filter</div>
  </div>
</template>
