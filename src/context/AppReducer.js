export const initialState = {
  user: null,
  basket: [],
};
export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};
export const addToBasket = (product) => {
  return {
    type: "ADD_TO_BASKET",
    payload: product,
  };
};
export const removeFromBasket = (id) => {
  return {
    type: "REMOVE_FROM_BASKET",
    payload: id,
  };
};
// export const getTotalPrice = (basket) => {
//   return basket.reduce((acc, cur) => {
//     return (acc = acc + cur.price);
//   }, 0);
// };
export const deleteAll = () => {
  return {
    type: "DELETE_ALL",
  };
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (item) => item.id === action.payload
      );
      let updateBasket = [...state.basket];
      if (index >= 0) {
        updateBasket.splice(index, 1);
      } else {
        console.log("error");
      }
      return {
        ...state,
        basket: updateBasket,
      };
    case "DELETE_ALL":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};
export default AppReducer;
