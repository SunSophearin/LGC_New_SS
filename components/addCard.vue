<script setup lang="ts">
// Initialize a reactive cart state
const cart = useState<any[]>("storeCart", () => []);
// const isLoading = ref(false); // Loading state
const isLoading = useState("isLoading", () => false);

// Load cart items from localStorage on component mount
const loadCart = () => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart.value = JSON.parse(savedCart);
  }
};

// Remove an item from the cart and update localStorage
const removeItem = async (itemToRemove: any) => {
  isLoading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const index = cart.value.findIndex(
    (item: any) => item.id === itemToRemove.id
  );
  if (index !== -1) {
    cart.value.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart.value));
  }
  isLoading.value = false;
};

// Update the quantity of an item and save to localStorage
const updateQuantity = (item: any, quantity: number) => {
  const index = cart.value.findIndex(
    (cartItem: any) => cartItem.id === item.id
  );
  if (index !== -1 && quantity > 0) {
    cart.value[index].quantity = quantity;
    localStorage.setItem("cart", JSON.stringify(cart.value));
  }
};

// Computed property to calculate total price of items in cart
const totalPrice = computed(() => {
  return cart.value.reduce(
    (total: any, item: any) => total + item.price * item.quantity,
    0
  );
});
const totalProduct = computed(() => {
  return cart.value.reduce((total: any, item: any) => total + item.quantity, 0);
});
// Load cart on component mount
onMounted(() => {
  loadCart();
});
</script>

<template>
  <div>
    <Empty v-if="!cart.length" />
    <div
      v-else
      class="w-[95%] h-[370px] sm:h-[500px] md:h-[700px] lg:h-[400px] overflow-y-scroll mx-auto my-4 relative overflow-x-auto shadow-md sm:rounded-lg"
    >
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-16 py-3">
              <span class="sr-only">Image</span>
            </th>
            <th scope="col" class="px-6 py-3">Product</th>
            <th scope="col" class="px-6 py-3">Qty</th>
            <th scope="col" class="px-6 py-3">Price</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in cart"
            :key="item.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="p-4">
              <img
                :src="item.img"
                class="w-16 md:w-32 max-w-full max-h-full"
                alt="Product Image"
              />
            </td>
            <td
              class="font-sixtyfour px-6 py-4 text-[8px] lg:text-sm text-gray-900 dark:text-white"
            >
              {{ item.name }}
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <button
                  @click="updateQuantity(item, item.quantity - 1)"
                  class="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button"
                >
                  <span class="sr-only">Decrease Quantity</span>
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <div class="ms-3">
                  <input
                    type="number"
                    v-model="item.quantity"
                    @input="updateQuantity(item, item.quantity)"
                    min="1"
                    class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  @click="updateQuantity(item, item.quantity + 1)"
                  class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button"
                >
                  <span class="sr-only">Increase Quantity</span>
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
            </td>
            <td
              class="px-3 lg:px-6 py-4 font-semibold text-gray-900 dark:text-white"
            >
              {{ item.price }} $
            </td>
            <td class="px-6 py-4">
              <button
                @click.prevent="removeItem(item)"
                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                :disabled="isLoading"
              >
                <span> Remove </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="w-[95%] mx-auto my-4 relative overflow-x-auto shadow-md sm:rounded-lg"
    >
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <tfoot v-if="cart.length" class="border-t dark:border-gray-700">
          <tr class="font-semibold text-gray-900 dark:text-white">
            <th scope="col" class="lg:px-16 lg:py-10">
              <span class="sr-only">Image</span>
            </th>
            <th
              scope="col"
              class="px-3 md:px-6 md:pl-32 py-3 font-sixtyfour text-xl font-bold"
            >
              Total
            </th>
            <th scope="col" class="px-3 md:px-6 py-3 text-lg lg:text-xl">
              {{ totalProduct }}
            </th>
            <th
              scope="col"
              class="px-3 lg:px-6 py-3 text-lg md:text-xl text-blue-600"
            >
              {{ totalPrice }} $
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
<style scoped>
.example-showcase .el-loading-mask {
  z-index: 9;
}
</style>
