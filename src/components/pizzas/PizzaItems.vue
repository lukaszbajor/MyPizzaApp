<template>
  <ul>
    <pizza-item :filteredPizzas="filteredPizzas"></pizza-item>
  </ul>
</template>

<script>
import PizzaItem from "./PizzaItem.vue";

export default {
  components: {
    PizzaItem,
  },
  computed: {
    filteredPizzas() {
      return this.$store.getters["pizzas/pizzas"];
    },
  },
};
</script>
