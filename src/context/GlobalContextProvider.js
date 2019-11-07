import React, { createContext, useReducer } from "react";

import { SET_VISIBLE_SECTION, SET_SECTION_REFS } from "../utils/constants";

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

const initialState = {
  visibleSection: "Doma",
  sectionRefs: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_VISIBLE_SECTION:
      return { ...state, visibleSection: action.visibleSection };
    case SET_SECTION_REFS:
      return { ...state, sectionRefs: action.sectionRefs };
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
