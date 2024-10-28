<script setup lang="ts">


const links = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Products',
  },
  {
    label:'Cart', 
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
  </div>
</template>
