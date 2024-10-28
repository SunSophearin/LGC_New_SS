<script setup lang="ts">
const listMenu = ref();

const cart = useState<any[]>("storeCart", () => []);

const { data }: any = await useFetch(
  "https://la3la3.com/shop-api/home/api/get-category.php"
);
listMenu.value = JSON.parse(data.value);
const handlenameSub = (item: any) => {
  localStorage.setItem("my-store", '{"breadcrumb":  "' + "" + '"}');
};
const slideBar = useState("isSlideBar");
const loadCart = () => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart.value = JSON.parse(savedCart);
  }
  console.log(cart.value);
};
onMounted(() => {
  loadCart();
});
</script>
<template>
  <div
    class="sticky top-0 bg-gray-100 filter-blur drop-shadow-xl dark:bg-[#171717] z-50 border-b-2 border-gray-200 dark:border-gray-800"
  >
    <UContainer class="flex justify-between p-5 items-center">
      <div>
        <NuxtLink to="/">
          <img
            to="/"
            class="w-10"
            src="https://cdn-icons-png.flaticon.com/512/8193/8193209.png"
            alt=""
          />
        </NuxtLink>
      </div>
      <div class="hidden lg:flex sm:hidden md:hidden">
        <ul class="flex gap-7 font-sixtyfour">
          <li
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
      <div class="flex justify-center items-start gap-6">
        <DarkMode />
        <div>
          <div v-if="cart.length">
            <el-badge :value="cart.length" class="item" type="primary">
              <NuxtLink to="/cart">
                <UIcon
                  name="clarity:shopping-cart-line"
                  class="w-6 h-6 p-0 cursor-pointer"
                />
              </NuxtLink>
            </el-badge>
          </div>
          <div v-else>
            <NuxtLink to="/cart">
              <UIcon
                name="clarity:shopping-cart-line"
                class="w-6 h-6 p-0 cursor-pointer"
              />
            </NuxtLink>
          </div>
        </div>
        <UIcon
          name="logos:facebook"
          class="w-5 h-5 cursor-pointer hidden lg:flex"
        />
        <UIcon
          @click="slideBar = true"
          name="streamline:interface-setting-menu-2-button-parallel-horizontal-lines-menu-navigation-staggered-three-hamburger"
          class="w-5 h-5 cursor-pointer lg:hidden"
        />
      </div>
    </UContainer>
  </div>
</template>
