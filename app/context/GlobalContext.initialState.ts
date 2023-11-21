import { LangState } from "../reducers/lang";
import { ThemeState } from "../reducers/theme";

export type InitialStateType = {
  lang: LangState;
  theme: ThemeState;
};

export const initialState: InitialStateType = {
  lang: {
    langSelected: "es",
  },
  theme: {
    themeSelected: "light",
  },
};
