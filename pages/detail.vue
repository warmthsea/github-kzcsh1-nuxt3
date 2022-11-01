<script lang="ts" setup>
const route = useRoute();
const router = useRouter();

const goRouter = (type: string): void => {
  console.log(type);
  router.push({
    path: route.path,
    query: {
      ...route.query,
      type,
    },
  });
};

onMounted(() => {
  console.warn("detail page onMounted");
  console.log(route.query.type);
});
</script>

<template>
  <div class="">
    <div>detail pages</div>
    <button @click="goRouter('888')">use router go 888</button>
    <button @click="goRouter('999')">use router go 999</button>
  </div>
</template>

<style>
button {
  margin: 20px;
  padding: 10px 20px;
}
</style>
