export default {
  addToCart(context, product) {
    const productData = {
      id: "XXX",
      name: product.name,
      size: product.size,
      price: product.price,
      qty: product.qty,
    };
    context.commit("addToCart", productData);
  },
};
