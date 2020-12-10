export const initialState = {
  basket: [],
  user: null,
};

// Selector, this is a professional practice to show in the industry
// try to keep the selector inside the reducer file, sony said that
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
/* this may look confusing but it is pretty much like the forEach loop
  it loop through the basket and get every item in it
  then take the price of each one and add it to the amount variable
  the  initial value of "amount" is the second argument that we passed in the reduce function*/

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.worn(
          `can't remove the product (id: ${action.id} as it is not in the basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
