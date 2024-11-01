<script setup>
const isloading = useState('isLoading');
</script>
<template>
  <div>
    <NuxtLoadingIndicator />
    <Header/>
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
    <SlideMenu/>
    <MenuBar/>
    <div class="w-full h-40">
      <Footer/>
    </div>
    <UILoadingRemoveProductInCart v-if="isloading" />
    <BackToTop/>
  </div>
</template>
