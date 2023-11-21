import { ActionMap } from "../context/GlobalContext.props";
import { Langs } from "../types/lang.model";

export enum LangTypes {
  SelectLang = "SELECT_LANG",
}

type LangPayload = {
  [LangTypes.SelectLang]: {
    langSelected: Langs;
  };
};

export interface LangState {
  langSelected: Langs;
}

export type LangActions = ActionMap<LangPayload>[keyof ActionMap<LangPayload>];

export const langReducer = (state: LangState, action: LangActions) => {
  switch (action.type) {
    case LangTypes.SelectLang:
      return {
        ...state,
        langSelected: action.payload.langSelected,
      };
    default:
      return state;
  }
};
