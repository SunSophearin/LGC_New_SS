<script setup>
const loading = ref(false);
const getLoading = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
}
getLoading();
</script>
<template>
  <div>
    <UILoadingFooter v-if="loading" />
    <footer v-else class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://portfolio-sunsophearin.vercel.app/?fbclid=IwY2xjawGLPw9leHRuA2FlbQIxMAABHar9iFC2XjMkAojOB12inSmvmD2CzYgpis62GFHCKQwHv95MsPMtEkre8w_aem_Ppk-ro4o2AkZxnYp7eHTsg"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="../assets/img/logoLGC.png"
              class="w-32"
              alt="Flowbite Logo"
            />
            
          </a>
          <ul
            class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
          >
            <li>
              <a href="https://portfolio-sunsophearin.vercel.app/?fbclid=IwY2xjawGLPw9leHRuA2FlbQIxMAABHar9iFC2XjMkAojOB12inSmvmD2CzYgpis62GFHCKQwHv95MsPMtEkre8w_aem_Ppk-ro4o2AkZxnYp7eHTsg" class="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="https://portfolio-sunsophearin.vercel.app/?fbclid=IwY2xjawGLPw9leHRuA2FlbQIxMAABHar9iFC2XjMkAojOB12inSmvmD2CzYgpis62GFHCKQwHv95MsPMtEkre8w_aem_Ppk-ro4o2AkZxnYp7eHTsg" class="hover:underline me-4 md:me-6"
                >Privacy Policy</a
              >
            </li>
            <li>
              <a href="https://portfolio-sunsophearin.vercel.app/?fbclid=IwY2xjawGLPw9leHRuA2FlbQIxMAABHar9iFC2XjMkAojOB12inSmvmD2CzYgpis62GFHCKQwHv95MsPMtEkre8w_aem_Ppk-ro4o2AkZxnYp7eHTsg" class="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="https://portfolio-sunsophearin.vercel.app/?fbclid=IwY2xjawGLPw9leHRuA2FlbQIxMAABHar9iFC2XjMkAojOB12inSmvmD2CzYgpis62GFHCKQwHv95MsPMtEkre8w_aem_Ppk-ro4o2AkZxnYp7eHTsg" class="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr
          class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
        />
        <span
          class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >© 2024
          <a href="https://portfolio-sunsophearin.vercel.app/?fbclid=IwY2xjawGLPw9leHRuA2FlbQIxMAABHar9iFC2XjMkAojOB12inSmvmD2CzYgpis62GFHCKQwHv95MsPMtEkre8w_aem_Ppk-ro4o2AkZxnYp7eHTsg" class="hover:underline">RedEye.™</a>.
          All Rights Reserved.</span
        >
      </div>
    </footer>
  </div>
</template>
