<template>
  <form @submit.prevent="submit">
    <label for="login">Login:</label>
    <input type="text" name="login" id="login" v-model="userLogin" />
    <label for="password">Hasło:</label>
    <input
      type="password"
      name="password"
      id="password"
      v-model="userPassword"
    />
    <input type="submit" value="Zaloguj się" />
    <input type="reset" value="Resetuj" />
  </form>
</template>
<script>
export default {
  data() {
    return {
      userLogin: "",
      userPassword: "",
    };
  },
  methods: {
    submit() {
      alert(this.userLogin + " " + this.userPassword);
    },
  },
};
</script>
<style></style>
