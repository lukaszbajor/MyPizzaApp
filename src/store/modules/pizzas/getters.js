export default {
  pizzas(state) {
    return state.pizzas;
  },
  pizzasOne(state) {
    return state.pizzas[0].name;
  },
  hasPizzas(state) {
    return state.pizzas && state.pizzas.length > 0;
  },
};
