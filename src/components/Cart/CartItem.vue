<template>
  <li v-for="product in filteredCart" :key="product.id">
    <div class="xd">
      <h3>Nazwa</h3>
      <p>{{ product.name }}</p>
    </div>
    <!-- <div class="xd">
      <p>{{ product.size }} zł</p>
    </div>
    <div class="xd">
      <p>{{ product.price }} zł</p>
    </div>
    <div class="xd">
      <p>{{ product.qty }} zł</p>
    </div> -->

    <!-- <button v-if="isLogin === true">Dodaj do koszyka</button>
    <button v-else disabled>Zaloguj się, aby dodać do koszyka</button> -->
  </li>
</template>

<script>
export default {
  props: ["filteredCart"],
  data() {
    return {
      isLogin: true,
    };
  },
  methods: {
    zal() {
      this.isLogin = !this.isLogin;
    },
  },
};
</script>
