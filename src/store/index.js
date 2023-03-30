import { createStore } from "vuex";
import pizzasModule from "./modules/pizzas/index.js";

const store = createStore({
  modules: {
    pizzas: pizzasModule,
  },
});

export default store;
