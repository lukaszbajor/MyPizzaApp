import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
export default {
  namespaced: true,
  state() {
    return {
      pizzas: [
        {
          id: "p1",
          name: "Hawajska",
          ingredients: "sos, ser, oregano, kurczak, ananas",
          priceSmall: 24.99,
          priceMedium: 35.99,
          priceBig: 45.99,
        },
        {
          id: "p2",
          name: "Amerykańska",
          ingredients: "sos, ser, oregano, kurczak, tuńczyk, kukurydza",
          priceSmall: 24.99,
          priceMedium: 35.99,
          priceBig: 45.99,
        },
        {
          id: "p3",
          name: "Biała",
          ingredients: "sos, ser, oregano, szynka, majonez",
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
