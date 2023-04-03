<template>
  <header>
    <h1><router-link to="/">MyPizzaApp</router-link></h1>
    <div v-if="isLogin === false">
      <base-button
        ><router-link to="/login">Zaloguj się</router-link></base-button
      >
      <base-button
        ><router-link to="/register">Zarejestruj się</router-link></base-button
      >
    </div>
    <div v-else>
      <base-button
        ><router-link to="/settings">Ustawienia</router-link></base-button
      >
    </div>
  </header>
</template>
<script>
import BaseButton from "../UI/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
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
};
</script>

<style scoped>
header {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  background-color: tomato;
}
a.router-link-active {
  color: green;
  background-color: pink;
}
div {
  align-self: center;
}
button {
  margin-right: 10px;
}
</style>
