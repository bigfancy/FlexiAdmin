import { AnyAction } from "redux";
import { ThemeState } from "@/redux/interface";
import * as types from "@/redux/mutation-types";

const themeState: ThemeState = {
  isDark: false
};

const theme = (state: ThemeState = themeState, action: AnyAction) => {
  switch (action.type) {
    case types.SET_THEME:
      return {
        ...state,
        ...action.theme
      };
    default:
      return state;
  }
};

export default theme; 