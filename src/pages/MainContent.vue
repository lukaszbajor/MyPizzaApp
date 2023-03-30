<template>
  <p>Sekcja 1</p>
  <p>Sekcja 2</p>
  <p>Sekcja 3</p>

  <ul>
    <li v-for="pizza in filteredPizzas" :key="pizza.id">{{ pizza.name }}</li>
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
