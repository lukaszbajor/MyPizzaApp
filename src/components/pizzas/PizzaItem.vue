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
      <input type="radio" name="pizza" value="mała" v-model="size" />
    </div>

    <div class="xd">
      <h3>30 cm</h3>
      <p>{{ pizza.priceMedium }} zł</p>
      <input type="radio" name="pizza" value="duża" v-model="size" />
    </div>
    <div class="xd">
      <h3>45 cm</h3>
      <p>{{ pizza.priceBig }} zł</p>

      <input type="radio" name="pizza" value="mega" v-model="size" />
    </div>
    <button v-if="isLogin === true" @click="addItem(pizza)">
      Dodaj do koszyka
    </button>
    <button v-else disabled>Zaloguj się, aby dodać do koszyka</button>
  </li>
</template>

<script>
export default {
  props: ["filteredPizzas"],
  data() {
    return {
      isLogin: true,
      size: null,
    };
  },
  methods: {
    zal() {
      this.isLogin = !this.isLogin;
    },
    addItem(pizza) {
      console.log(this.$store.getters["cart/cart"]);
      const newPizza = { ...pizza, qty: 1, size: this.size };
      console.log(newPizza);
      console.log(this.size);
      return this.$store.dispatch("cart/addToCart", newPizza);
    },
  },
};
</script>
