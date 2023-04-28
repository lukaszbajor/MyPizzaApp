export default {
  addToCart(context, product) {
    return context.commit("addToCart", product);
  },
};
