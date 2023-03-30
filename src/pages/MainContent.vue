<template>
  <p>Sekcja 1</p>
  <p>Sekcja 2</p>
  <p>Sekcja 3</p>

  <ul>
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
        <input type="radio" />
      </div>

      <div class="xd">
        <h3>30 cm</h3>
        <p>{{ pizza.priceMedium }} zł</p>
        <input type="radio" />
      </div>
      <div class="xd">
        <h3>45 cm</h3>
        <p>{{ pizza.priceBig }} zł</p>
        <input type="radio" />
      </div>
      <button>Dodaj do koszyka</button>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    filteredPizzas() {
      return this.$store.getters["pizzas/pizzas"];
    },
  },
};
</script>
<style>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div.xd {
  flex: 1;
  flex-direction: column;
  margin-right: 20px;
}
p {
  flex: 1;
  align-items: center;
}
h3 {
  justify-content: start;
  align-items: start;
}
</style>
