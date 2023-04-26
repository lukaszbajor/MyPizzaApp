import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
export default {
  namespaced: true,
  state() {
    return {
      cart: [
        {
          id: "p1",
          name: "Hawajska",
          ingredients: "sos, ser, oregano, kurczak, ananas",
          priceSmall: 24.99,
          priceMedium: 35.99,
          priceBig: 45.99,
        },
      ],
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};
