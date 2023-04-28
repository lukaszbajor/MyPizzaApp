export default {
  addToCart(state, payload) {
    const inCart = state.cart.find((item) => item.id === payload.id);
    if (inCart) {
      inCart.qty++;
    } else {
      state.cart.push(payload);
    }
  },
};
