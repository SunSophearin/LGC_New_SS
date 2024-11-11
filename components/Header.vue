<script setup lang="ts">
const listMenu = ref();
const loading = ref(false);
const cart = useState<any[]>("storeCart", () => []);

const getHeaderList = async () => {
  loading.value = true;
  const { data }: any = await useFetch(
    "https://la3la3.com/shop-api/home/api/get-category.php"
  );
  listMenu.value = JSON.parse(data.value);
  await new Promise((resolve) => setTimeout(resolve, 300));
  loading.value = false;
};
const handlenameSub = (item: any) => {
  localStorage.setItem("my-store", '{"breadcrumb":  "' + "" + '"}');
};
const slideBar = useState("isSlideBar");
const loadCart = () => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart.value = JSON.parse(savedCart);
  }
};
getHeaderList();
onMounted(() => {
  loadCart();
});
</script>
<template>
  <UILoadingHeader v-if="loading" />
  <div
    v-else
    class="sticky top-0 backdrop-blur-xl backdrop-brightness-150 dark:backdrop-blur-0 filter-blur drop-shadow-xl dark:bg-[#171717] z-50 dark:border-b-2 dark:border-gray-800"
  >
    <UContainer class="flex justify-between p-5 items-center font-medium">
      <div>
        <NuxtLink to="/">
          <img
            to="/"
            class="w-20 md:w-40 lg:w-50"
            src="../assets/img/logoLGC.png"
            alt=""
          />
        </NuxtLink>
      </div>
      <div class="hidden lg:flex sm:hidden md:hidden">
        <ul class="flex gap-7 font-sixtyfour ">
          <li
            class="link-7 hover:text-blue-600 dark:hover:text-blue-500"
            v-for="item in listMenu"
            :key="item.id"
            @click="handlenameSub(item.name)"
          >
            <NuxtLink :to="`/products/${item.id}/catagory`">{{
              item.name
            }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex justify-center items-center gap-5 ">
        <DarkMode />
        <div class="text-blue-600 dark:text-blue-500">
          <div v-if="cart.length">
            <el-badge :value="cart.length" class="item" type="primary">
              <NuxtLink to="/cart">
                <Icon
                  name="clarity:shopping-cart-line"
                  class="w-7 h-7 cursor-pointer"
                />
              </NuxtLink>
            </el-badge>
          </div>
          <div v-else>
            <NuxtLink to="/cart">
              <Icon
                name="clarity:shopping-cart-line"
                class="w-7 h-7 cursor-pointer"
              />
            </NuxtLink>
          </div>
        </div>
        <a
          href="https://web.facebook.com/zi.rin.75"
          class="cursor-pointer hidden lg:flex"
        >
          <Icon name="logos:facebook" class="w-6 h-6 cursor-pointer" />
        </a>
        
        <Icon
          @click="slideBar = true"
          name="streamline:interface-setting-menu-2-button-parallel-horizontal-lines-menu-navigation-staggered-three-hamburger"
          class="w-6 h-6 text-blue-800 dark:text-blue-500 cursor-pointer lg:hidden"
        />
      </div>
    </UContainer>
  </div>
</template>
