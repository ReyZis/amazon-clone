export const initialState = {
  basket: [],
  prices: [0],
};

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
        prices: [...state.prices, action.item.price],
      };

    default:
      return state;
  }
};

export default reducer;
