<script setup lang="ts">

const loadingCart = ref(false);

const handleAddToCart = async () => {
  loadingCart.value = true;
  // Simulate adding to cart (e.g., an API call)
  await new Promise((resolve) => setTimeout(resolve, 2000));
  loadingCart.value = false;
  // Show a success message or trigger other actions
};
</script>

<template>
  <button
    @click="handleAddToCart"
    :disabled="loadingCart"
    class=" flex items-center justify-center w-full h-full font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out"
  >
    <span v-if="!loadingCart" class="flex items-center justify-center gap-2">
        <UIcon name="clarity:shopping-cart-line" class="w-5 h-6 p-0 cursor-pointer"/>
        <span>Add to Cart</span>

    </span>
    <svg
      v-if="loadingCart"
      class="w-5 h-5 text-white animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      ></path>
    </svg>
  </button>
</template>

<style scoped>
/* Scoped styles if needed */
</style>
