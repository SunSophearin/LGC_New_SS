<script setup lang="ts">
const route = useRoute();
const productsList = ref<any>([]);
const e = ref(10);
const s = ref(0);
const loading = ref(false);
const loading1 = ref(false);
const loading_PRO=ref(false);

const open1 = () => {
  ElNotification({
    title: "Success!",
    message: "Your item is now in the cart",
    type: "success",
    position: "bottom-right",
    duration: 2000,
  });
};
// Cart state
const cart = useState<any[]>("storeCart", () => []);
// Load cart from localStorage
const loadCart = () => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart.value = JSON.parse(savedCart);
  }
};

// Save cart to localStorage
const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart.value));
};

// Add product to cart
const addToCart = (product: any) => {
  const existingProduct = cart.value.find(
    (item: any) => item.id === product.id
  );
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
  saveCart();
};
const getApiUrl = () => {
  const baseUrl = `https://la3la3.com/shop-api/home/api/get-product.php?s=${s.value}&e=${e.value}`;
  return baseUrl;
};
const loadingProduct = () => {
  loading_PRO.value = true;
  setTimeout(() => {
    loading_PRO.value = false;
  }, 1000);
}
const getProductApi = async () => {
  loading.value = true;
  try {
    const {
      data: products,
      pending,
      error,
    }: any = await useFetch(getApiUrl(), {
      lazy: true,
    });

    if (error.value) {
      return;
    }
    if (products.value) {
      const newProducts = JSON.parse(products.value);
      if (Array.isArray(newProducts)) {
        productsList.value.push(...newProducts);
      } else {
      }
    } else {
    }
  } catch (err) {
  } finally {
    loading.value = false;
  }
};
const noMore = computed(() => s.value >= productsList.value.length);
const disabled = computed(() => loading.value || noMore.value);
const load = () => {
  loading1.value = true;
  setTimeout(async () => {
    s.value += e.value;
    await getProductApi();
    loading1.value = false;
  }, 2000);
};
loadingProduct();
onMounted(() => {
  getProductApi();
  loadCart(); // Load cart when component mounts
});
onBeforeMount(() => {
  getProductApi();
});

// getProductApi();
const setImg = (img: any, item: any) => {
  item.img = img;
};
</script>
<template>
  <UILoadingProduct v-if="loading_PRO" />
  <div v-else>
    <div class="h-full text-center">
      <ul
        class="list"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="disabled"
      >
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-2 lg:p-4"
        >
          <div
            class="h-[280px] md:h-[400px] lg:h-[450px] cursor-pointer p-2 bg-white dark:bg-neutral-800 filter drop-shadow-xl rounded-b-lg lg:mb-6 lg:my-0 lg:mx-0 rounded-xl transform transition duration-300 hover:scale-95 hover:shadow-blue-500"
            v-for="item in productsList"
            :key="item.id"
          >
            <div class="w-full h-[55%] md:h-[45%] object-center">
              <el-image
                class="object-center w-full h-full"
                :src="item.img"
                :zoom-rate="1.2"
                :max-scale="7"
                :min-scale="0.2"
                :preview-src-list="item.imgList"
                :initial-index="4"
                fit="contain"
              />
            </div>
            <div class="w-full h-[45%] md:h-[55%] lg:p-3">
              <div
                class="w-full h-[75%] xl:h-[45%] md:h-[35%] lg:h-[45%] p-1 flex flex-col justify-center items-center"
              >
                <p
                  class="text-[10px] md:text-xs lg:text-sm font-semibold p-0 text-center h-1/2"
                >
                  {{ item.name }}
                </p>
                <p
                  class="text-xl font-semibold flex items-center text-center mt-2 h-1/2 text-price"
                >
                  {{ item.price }}$
                </p>
              </div>
              <div
                class="hidden md:flex w-full h-[40%] xl:h-[40%] lg:flex justify-center items-center gap-2 p-2"
              >
                <div
                  v-for="img in item.imgList.slice(0, 4)"
                  :key="img"
                  class="w-[25%] h-full lg:block"
                >
                  <img
                    @click="setImg(img, item)"
                    :src="img"
                    alt=""
                    :class="{ 'border-2 border-blue-500': item.img === img }"
                    class="w-full h-full object-center block rounded-sm hover:border-blue-500 hover:border-2 cursor-pointer transition duration-300"
                  />
                </div>
              </div>
              <div
                class="w-[100%] h-[25%] mx-auto md:mt-4 xl:mt-3 md:h-[15%] lg:h-[15%] bg-blue-500 text-white overflow-hidden rounded-br-2xl rounded-tl-2xl"
                @click="open1(), addToCart(item)"
              >
                <UIButtonAddCart />
              </div>
            </div>
          </div>
        </div>
      </ul>
      <p v-if="loading1">
        <img
          class="w-9 mx-auto h-9 animate-spin"
          src="https://www.svgrepo.com/show/199956/loading-loader.svg"
          alt="Loading icon"
        />
      </p>
      <p
        v-show="noMore"
        class="text-white dark:text-[#171717]"
        :class="{ 'addMore ': loading === false }"
      >
        No more
      </p>
    </div>
  </div>
</template>
<style scoped>
.demo-image__error .image-slot {
  font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
.demo-image__error .el-image {
  width: 100%;
  height: 100%;
}
.infinite-list-wrapper {
  height: 540px;
  text-align: center;
}
</style>
