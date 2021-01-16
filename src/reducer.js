const reducer = (state, action) => {
  if (action.type === "INCREASE") {
    let tempItems = state.items;
    tempItems[action.id - 1].amount = tempItems[action.id - 1].amount + 1;
    let tempCart = state.items.filter((item) => item.amount > 0);
    return { ...state, items: tempItems, cart: tempCart };
  }
  if (action.type === "DECREASE") {
    let tempItems = state.items;
    if (tempItems[action.id - 1].amount === 0) {
      return { ...state };
    }
    tempItems[action.id - 1].amount = tempItems[action.id - 1].amount - 1;
    let tempCart = state.items.filter((item) => item.amount > 0);
    return { ...state, items: tempItems, cart: tempCart };
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
    return { ...state, total };
  }
};
export default reducer;
