import { createContext, useReducer } from "react";
import { initialState } from "./AppReducer";
import AppReducer from "./AppReducer";
export const GlobalContext = createContext();

const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{ user: state.user, basket: state.basket, dispatch: dispatch }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
