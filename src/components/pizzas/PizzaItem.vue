<template>
  <li v-for="pizza in filteredPizzas" :key="pizza.id">
    <div class="xd">
      <h3>Nazwa</h3>
      <p>{{ pizza.name }}</p>
    </div>
    <div class="xd">
      <h3>Składniki</h3>
      <p>{{ pizza.ingredients }}</p>
    </div>
    <div class="xd">
      <h4>24 cm {{ pizza.priceSmall }}</h4>
      <p>{{ pizza.priceSmall }} zł</p>
      <input type="radio" name="pizza" />
    </div>

    <div class="xd">
      <h3>30 cm</h3>
      <p>{{ pizza.priceMedium }} zł</p>
      <input type="radio" name="pizza" />
    </div>
    <div class="xd">
      <h3>45 cm</h3>
      <p>{{ pizza.priceBig }} zł</p>

      <input type="radio" name="pizza" />
    </div>
    <button v-if="isLogin === true">Dodaj do koszyka</button>
    <button v-else disabled>Zaloguj się, aby dodać do koszyka</button>
  </li>
</template>

<script>
export default {
  props: ["filteredPizzas"],
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
