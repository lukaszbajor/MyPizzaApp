<template>
  <form @submit.prevent="submit">
    <label for="firstName">Imię:</label>
    <input
      type="text"
      name="firstName"
      id="firstName"
      v-model="userFirstName"
    />
    <label for="lastName">Nazwisko:</label>
    <input type="text" name="lastName" id="lastName" v-model="userLastName" />
    <label for="city">Miejscowość:</label>
    <input type="text" name="city" id="city" v-model="userCity" />
    <label for="street">Ulica:</label>
    <input type="text" name="street" id="street" v-model="userStreet" />
    <label for="homeNumber">Numer domu/mieszkania:</label>
    <input
      type="text"
      name="homeNumber"
      id="homeNumber"
      v-model="userHomeNumber"
    />
    <label for="phoneNumber">Numer telefonu:</label>
    <input
      type="number"
      name="phoneNumber"
      id="phoneNumber"
      v-model="userPhoneNumber"
    />
    <label for="email">Adres- e-mail:</label>
    <input type="email" name="email" id="email" v-model="userEmail" />
    <label for="login">Login:</label>
    <input type="text" name="login" id="login" v-model="userLogin" />
    <label for="password">Hasło:</label>
    <input
      type="password"
      name="password"
      id="password"
      v-model="userPassword"
    />
    <label for="password2">Powtórz hasło:</label>
    <input
      type="password"
      name="password2"
      id="password2"
      v-model="userPassword2"
    />
    <input type="submit" value="Zarejestruj się" />
    <input type="reset" value="Resetuj" />
  </form>
</template>
<script>
export default {
  data() {
    return {
      userFirstName: "",
      userLastName: "",
      userCity: "",
      userStreet: "",
      userHomeNumber: "",
      userPhoneNumber: "",
      userEmail: "",
      userLogin: "",
      userPassword: "",
      userPassword2: "",
    };
  },
  methods: {
    submit() {
      alert(
        this.userLogin + " " + this.userPassword + " " + this.userHomeNumber
      );
    },
  },
};
</script>
<style></style>
