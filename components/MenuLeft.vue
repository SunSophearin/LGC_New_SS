<script setup lang="ts">
import autoAnimate from "@formkit/auto-animate";
const dropdown = ref();
const itemListSub = ref<any>([]);
const mid: any = ref<Number>(0);
const route = useRoute();
const isOpen = useState("isMenuOpen");
const loading = ref(false);

const getMenuLeftApi = async () => {
  loading.value = true;
  const { data: dataSub }: any = await useFetch(
    ` https://la3la3.com/shop-api/home/api/get-sub-category.php?cate-id=${mid.value}`
  );
  itemListSub.value = JSON.parse(dataSub.value);
  await new Promise((resolve) => setTimeout(resolve, 200));
  loading.value = false;
};

const handlenameSub = (item: any) => {
  localStorage.setItem("my-store", '{"breadcrumb":  "' + item + '"}');
};
const handleSub = (item: any) => {
  autoAnimate(dropdown.value);
  item["active-sub"] = !item["active-sub"];
};
watchEffect(() => {
  mid.value = Number(route.params.mid);
});
watch(mid, (newId: any, oldId: any) => {
  if (newId != oldId) {
    getMenuLeftApi();
    autoAnimate(dropdown.value);
  }
});

getMenuLeftApi();
</script>

<template>
  <div class="w-full font-sixtyfour">
    <UILoadinMenuLeft v-if="loading" />
    <div
      v-else
      class="w-full h-[600px] custom-scroll overflow-auto overflow-y-scroll"
    >
      <ul ref="dropdown" class="w-[90%] mx-auto dropdown">
        <li v-for="item in itemListSub" :key="item.id">
          <div
            @click="handleSub(item)"
            class="flex justify-between py-2 cursor-pointer dropdown-label"
          >
            <a class="text-ms">{{ item.name }}</a>
            <Icon
              name="heroicons:chevron-right-20-solid"
              class="bg-gray-900 dark:bg-gray-100 rotate-15 transform duration-300"
              :class="{
                'rotate-90 transform duration-300': item['active-sub'],
              }"
            />
          </div>
          <transition name="fade">
            <ul
              v-show="item['active-sub']"
              class="dropdown-content w-[90%] ml-[5%] border-l-gray-200 border-l"
            >
              <li
                @click="handlenameSub(sub.name)"
                v-for="sub in item.sub"
                :key="sub.id"
                class="flex justify-between py-2 cursor-pointer text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                <NuxtLink
                  :to="`/products/${mid}/catagory/${sub.id}`"
                  class="w-full pl-10 h-full"
                  activeClass="text-green-500 dark:text-green-400 border-l-green-500 border-l-[2px]"
                  @click="isOpen = false"
                  >{{ sub.name }}</NuxtLink
                >
              </li>
            </ul>
          </transition>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
