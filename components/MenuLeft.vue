<script setup lang="ts">
import { ref, watchEffect, watch } from 'vue';
import { useRoute } from 'vue-router';

const dropdown = ref();
const itemListSub = ref<any[]>([]);
const mid = ref<number>(0);
const route = useRoute();
const isOpen = useState("isMenuOpen");
const loading = ref(false);

const getMenuLeftApi = async () => {
  loading.value = true;
  const { data: dataSub }: any = await useFetch(
    `https://la3la3.com/shop-api/home/api/get-sub-category.php?cate-id=${mid.value}`
  );
  itemListSub.value = JSON.parse(dataSub.value);
  await new Promise((resolve) => setTimeout(resolve, 200));
  loading.value = false;
};

const handlenameSub = (item: string) => {
  localStorage.setItem("my-store", `{"breadcrumb": "${item}"}`);
};

const handleSub = (item: any) => {
  itemListSub.value.forEach((el: any) => {
    el["active-sub"] = el === item ? !el["active-sub"] : false;
  });
};

watchEffect(() => {
  mid.value = Number(route.params.mid);
});

watch(mid, (newId: any, oldId: any) => {
  if (newId !== oldId) {
    getMenuLeftApi();
  }
});

getMenuLeftApi();
</script>

<template>
  <div class="w-full font-sixtyfour">
    <UILoadinMenuLeft v-if="loading" />
    <div
      v-else
      class="w-full h-[600px] custom-scroll overflow-auto overflow-y-scroll "
    >
      <ul ref="dropdown" class="w-[90%] mx-auto dropdown ">
        <li v-for="item in itemListSub" :key="item.id">
          <div
            @click="handleSub(item)"
            class="flex justify-between py-2 cursor-pointer dropdown-label"
          >
            <a class="text-ms">{{ item.name }}</a>
            <Icon
              name="heroicons:chevron-right-20-solid"
              class="bg-gray-900 dark:bg-gray-100 transition-transform duration-300"
              :class="{ 'rotate-90': item['active-sub'] }"
            />
          </div>
          <transition name="slide-fade">
            <div v-show="item['active-sub']">
              <ul
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
                    activeClass="text-blue-500 dark:text-blue-400 border-l-blue-500 border-l-[2px]"
                    @click="isOpen = false"
                  >{{ sub.name }}</NuxtLink>
                </li>
              </ul>
            </div>
          </transition>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
