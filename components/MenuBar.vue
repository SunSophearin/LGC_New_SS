<script setup lang="ts">
const isOpen = useState("isSlideBar", () => false);
const listMenu = ref();
const { data }: any = await useFetch(
  "https://la3la3.com/shop-api/home/api/get-category.php"
);
listMenu.value = JSON.parse(data.value);
const handlenameSub = (item: any) => {
  localStorage.setItem("my-store", '{"breadcrumb":  "' + "" + '"}');
};
</script>

<template>
  <div>
    <USlideover v-model="isOpen" side="left">
      <div class="p-4 flex-1 ">
        <UButton
          color="blue"
          variant="ghost"
          size="sm"
          icon="i-heroicons-x-mark-20-solid"
          class="flex sm:hidden absolute end-5 top-5 z-10"
          square
          padded
          @click="isOpen = false"
        />
          <div class="w-full">
            <ul class="flex w-full flex-col mt-10 font-sixtyfour">
              <li
                class="group w-full flex p-4 border-b-2 cursor-pointer"
                v-for="item in listMenu"
                :key="item.id"
                @click="handlenameSub(item.name)"
              >
                <NuxtLink class="w-full group-hover:ml-2 transform duration-300" :to="`/products/${item.id}/catagory`" @click="isOpen = false">{{
                  item.name
                }}</NuxtLink>
                <UIcon name="heroicons:chevron-right-20-solid" class="w-5 h-5 group-hover:text-blue-500 transform duration-150" />
              </li>
            </ul>
          </div>
      </div>
    </USlideover>
  </div>
</template>
