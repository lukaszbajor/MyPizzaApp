<template>
  <header>
    <h1><router-link to="/">MyPizzaApp</router-link></h1>
    <div v-if="isLogin === false">
      <button><router-link to="/login">Zaloguj się</router-link></button>
      <button><router-link to="/register">Zarejestruj się</router-link></button>
    </div>
    <div v-else>
      <button><router-link to="/settings">Ustawienia</router-link></button>
      <!-- <button><router-link to="/register">Zarejestruj się</router-link></button> -->
    </div>
    <button @click="zal">zaloguj</button>
  </header>
</template>
<script>
// import router from "../../router.js";
export default {
  data() {
    return {
      isLogin: false,
    };
  },
  methods: {
    zal() {
      this.isLogin = !this.isLogin;
    },
  },
  //   created() {
  //     const that = this;
  //     router.beforeEach(function (to, from, next) {
  //       if (that.isLogin === true) {
  //         next();
  //       } else {
  //         next("/");
  //       }
  //     });
  //   },
};
</script>

<style>
header {
  background-color: tomato;
}
a.router-link-active {
  color: green;
  background-color: pink;
}
</style>
