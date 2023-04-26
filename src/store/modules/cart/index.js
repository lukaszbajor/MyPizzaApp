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
          size: "xxl",
          price: 45.99,
          qty: 1,
        },
        {
          id: "p2",
          name: "Amerykańska",
          size: "s",
          price: 24.99,
          qty: 1,
        },
      ],
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};
