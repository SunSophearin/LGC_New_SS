<script setup lang="ts">
const colorMode = useColorMode();
import { Moon, Sunny } from "@element-plus/icons-vue";
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <ClientOnly>
    <el-switch
      style="--el-switch-on-color: #409EFF; --el-switch-off-color: #409EFF;"
      v-model="isDark"
      inline-prompt
      :active-action-icon="Moon"
      :inactive-action-icon="Sunny"
    />
  </ClientOnly>
</template>
