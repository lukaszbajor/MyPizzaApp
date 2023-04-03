<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/Layouts/TheHeader.vue";
import TheFooter from "./components/Layouts/TheFooter.vue";
import store from "./store";

export default {
  store,
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 67.5%;
}
</style>
