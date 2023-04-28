<template>
  <ul>
    <cart-item :filteredCart="filteredCart"></cart-item>
  </ul>
</template>

<script>
import CartItem from "./CartItem.vue";
// import { mapGetters } from "vuex";

export default {
  components: {
    CartItem,
  },
  //   methods: {
  //     add(data) {
  //       this.store.dispatch("cart/addToCart", data);
  //     },
  //   },
  computed: {
    filteredCart() {
      console.log(this.$store.getters["cart/cart"]);
      return this.$store.getters["cart/cart"];
    },
  },
};
</script>
