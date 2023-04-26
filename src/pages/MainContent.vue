<template>
  <p>Sekcja 1</p>
  <pizza-items></pizza-items>
  <cart-main></cart-main>
  <p>Sekcja 3</p>
</template>

<script>
import PizzaItems from "@/components/pizzas/PizzaItems.vue";
import CartMain from "@/components/Cart/CartMain.vue";
export default {
  components: {
    PizzaItems,
    CartMain
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
