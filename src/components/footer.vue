<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item name="record" to="/record" icon="orders-o">记录</van-tabbar-item>
      <van-tabbar-item name="find" to="/find" icon="search">发现</van-tabbar-item>
      <van-tabbar-item name="user" to="/user" icon="user-o">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home",
    };
  },
  created() {
    console.log(this.$route.path);
    let activeClass = this.$route.path;
    if (activeClass == "/home") {
      this.active = "home";
    }
    if (activeClass == "/record") {
      this.active = "record";
    }
    if (activeClass == "/find") {
      this.active = "find";
    }
    if (activeClass == "/user") {
      this.active = "user";
    }
  },
};
</script>

<style>
</style>