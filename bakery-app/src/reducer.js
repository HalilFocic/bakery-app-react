const reducer = (state, action) => {
  if (action.type === "INCREASE") {
    let tempCart = state.cart;
    tempCart[0].amount = tempCart[0].amount + 1;
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREASE") {
    let newCart = state.cart;
    newCart[action.id - 1].amount = newCart[action.id - 1].amount + 1;
    if (newCart[action.id - 1].amount < 0) newCart[action.id - 1].amount = 0;
    return { ...state, cart: newCart };
  }
};
export default reducer;
