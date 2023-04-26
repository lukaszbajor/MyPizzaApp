<template>
  <li v-for="cartItem in filteredCart" :key="cartItem.id">
    <div class="xd">
      <h3>Nazwa</h3>
      <p>{{ cartItem.name }}</p>
    </div>
    <div class="xd">
      <p>{{ cartItem.size }} zł</p>
    </div>
    <div class="xd">
      <p>{{ cartItem.price }} zł</p>
    </div>
    <div class="xd">
      <p>{{ cartItem.qty }} zł</p>
    </div>

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
