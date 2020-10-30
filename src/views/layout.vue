<template>
  <div>
    <router-view />
    <app-footer />
  </div>
</template>

<script>
// 此处引入名字避免使用H5标签名footer，否则会引入失败
import AppFooter from "../components/footer";
export default {
  components: {
    AppFooter
  },
};
</script>

<style>
</style>