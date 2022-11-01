<script lang="ts" setup>
import { getBannerApi } from "~~/apis";

onMounted(() => {
  getBannerApi().then(res => {
    console.log(res);
  });
});
</script>

<template>
  <div class="">index pages</div>
</template>

<style lang="scss" scoped></style>
