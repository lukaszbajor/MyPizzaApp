<template>
  <ul>
    <cart-item :filteredCart="filteredCart"></cart-item>
  </ul>
</template>

<script>
import CartItem from "./CartItem.vue";

export default {
  components: {
    CartItem,
  },
  computed: {
    filteredCart() {
      return this.$store.getters["cart/cart"];
    },
  },
};
</script>
