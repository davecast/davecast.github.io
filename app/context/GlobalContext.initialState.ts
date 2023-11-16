import { LangState } from "../reducers/lang";

export type InitialStateType = {
  lang: LangState;
};

export const initialState: InitialStateType = {
  lang: {
    langSeleted: "es",
  },
};
