import { ActionMap } from "../context/GlobalContext.props";
import { Langs } from "../types/lang.model";

export enum LangTypes {
  SelectLang = "SELETC_LANG",
}

type LangPayload = {
  [LangTypes.SelectLang]: {
    langSeleted: Langs;
  };
};

export interface LangState {
  langSeleted: Langs;
}

export type LangActions = ActionMap<LangPayload>[keyof ActionMap<LangPayload>];

export const langReducer = (state: LangState, action: LangActions) => {
  switch (action.type) {
    case LangTypes.SelectLang:
      return {
        ...state,
        langSeleted: action.payload.langSeleted,
      };
    default:
      return state;
  }
};
