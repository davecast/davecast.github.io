"use client";

import { createContext, useReducer, Dispatch } from "react";
import { InitialStateType, initialState } from "./GlobalContext.initialState";
import { ContextProps } from "./GlobalContext.props";
import { LangActions, langReducer } from "../reducers/lang";
import { ThemeActions, themeReducer } from "../reducers/theme";

export const GlobalStateContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<LangActions | ThemeActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  state: InitialStateType,
  action: LangActions | ThemeActions
) => {
  return {
    lang: langReducer(state.lang, action as LangActions),
    theme: themeReducer(state.theme, action as ThemeActions),
  };
};

const Context = ({ children }: ContextProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default Context;
