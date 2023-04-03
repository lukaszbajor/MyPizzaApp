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
</template>

<script>
export default {
  props: ["filteredPizzas"],
};
</script>
