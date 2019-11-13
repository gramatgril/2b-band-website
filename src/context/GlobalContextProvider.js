import React, { createContext, useReducer } from "react";

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

const initialState = {
  theme: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
