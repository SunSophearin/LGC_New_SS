<template>
    <el-skeleton :rows="15" animated if="loading"/>
</template>
<script lang="ts" setup>


const loading = ref(true)


const setLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

onMounted(() => {
  setLoading()
})
</script>