
<template>
  <el-skeleton :rows="1" style="width: 50%" animated/>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2 lg:p-4">
    <div v-for=" i in 8" :key="i" class="h-[280px] md:h-[400px] lg:h-[450px] p-1">
      <el-space direction="vertical" alignment="flex-start">
        <el-skeleton
          style="width: 240px"
          :loading="loading"
          animated
          :throttle="500"
        >
          <template #template>
            <el-skeleton-item
              variant="image"
              style="width: 240px; height: 240px"
            />
            <div style="padding: 14px">
              <el-skeleton-item variant="h3" style="width: 50%" />
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-items: space-between;
                  margin-top: 16px;
                  height: 16px;
                "
              >
                <el-skeleton-item variant="text" style="margin-right: 16px" />
                <el-skeleton-item variant="text" style="width: 30%" />
              </div>
            </div>
          </template>
          
        </el-skeleton>
      </el-space>
    </div>
  </div>
</template>

<script lang="ts" setup>

const loading = ref(true);

onMounted(() => {
  loading.value = true;
});
</script>
