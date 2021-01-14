const reducer = (state, action) => {
  if (action.type === "INCREASE") {
    let tempCart = state.cart;
    tempCart[action.id - 1].amount = tempCart[action.id - 1].amount + 1;
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREASE") {
    let newCart = state.cart;
    newCart[action.id - 1].amount = newCart[action.id - 1].amount - 1;
    if (newCart[action.id - 1].amount < 0) newCart[action.id - 1].amount = 0;
    return { ...state, cart: newCart };
  }
  if (action.type === "GET_TOTALS") {
    let { total } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        cartTotal.total += price * amount;
        return cartTotal;
      },
      {
        total: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    console.log("Change!");
    return { ...state, total };
  }
};
export default reducer;
