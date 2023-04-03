<template>
  <base-section>
    <base-card>
      <form class="form" @submit.prevent="submit">
        <h2>Logowanie</h2>
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
    </base-card>
  </base-section>
</template>
<script>
import BaseSection from "@/components/UI/BaseSection.vue";
import BaseCard from "@/components/UI/BaseCard.vue";
export default {
  components: {
    BaseSection,
    BaseCard,
  },
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
<style>
.form {
  padding: 1.5rem;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: tomato;
}
label {
  align-self: flex-start;
}
label:nth-child(odd) {
  margin-top: 15px;
}
input[type="text"],
input[type="password"],
input[type="email"],
input[type="number"] {
  width: 100%;
}
</style>
