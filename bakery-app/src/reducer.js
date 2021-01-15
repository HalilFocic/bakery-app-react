const reducer = (state, action) => {
  if (action.type === "INCREASE") {
    let tempItems = state.items;
    tempCart[action.id - 1].amount = tempCart[action.id - 1].amount + 1;
    let tempCart = state.items.filter((item) => item.amount > 0);
    return { ...state, items: tempCart, cart: tempCart };
  }
  if (action.type === "DECREASE") {
    let newCart = state.items;
    newCart[action.id - 1].amount = newCart[action.id - 1].amount - 1;
    let tempCart = state.items.filter((item) => item.amount > 0);

    if (newCart[action.id - 1].amount < 0) newCart[action.id - 1].amount = 0;
    return { ...state, items: newCart, cart: tempCart };
  }
  if (action.type === "GET_TOTALS") {
    let { total } = state.items.reduce(
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
