export default {
  pizzas(state) {
    return state.pizzas;
  },
  hasPizzas(state) {
    return state.pizzas && state.pizzas.length > 0;
  },
};
