import { ActionMap } from "../context/GlobalContext.props";
import { Themes } from "../types/theme.model";

export enum ThemeTypes {
  SelectTheme = "SELECT_THEME",
}

type ThemePayload = {
  [ThemeTypes.SelectTheme]: {
    themeSelected: Themes;
  };
};

export interface ThemeState {
  themeSelected: Themes;
}

export type ThemeActions =
  ActionMap<ThemePayload>[keyof ActionMap<ThemePayload>];

export const themeReducer = (state: ThemeState, action: ThemeActions) => {
  switch (action.type) {
    case ThemeTypes.SelectTheme:
      return {
        ...state,
        themeSelected: action.payload.themeSelected,
      };
    default:
      return state;
  }
};
