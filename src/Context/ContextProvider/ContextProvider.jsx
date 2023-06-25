import { context } from "../../Context/Context";
import { useReducer } from "react";
import { ReduceFn } from "../../Reduce/ReduceFn";
import { InitialState } from "../../Global/InitialState";
// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReduceFn, InitialState);
  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};
