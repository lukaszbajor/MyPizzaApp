import { createStore } from "vuex";
import pizzasModule from "./modules/pizzas/index.js";
import cartModule from "./modules/cart/index.js";

const store = createStore({
  modules: {
    pizzas: pizzasModule,
    cart: cartModule,
  },
});

export default store;
