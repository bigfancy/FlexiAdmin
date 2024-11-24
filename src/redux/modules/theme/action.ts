import { ThemeState } from "@/redux/interface";
import * as types from "@/redux/mutation-types";

export const setTheme = (theme: ThemeState) => ({
  type: types.SET_THEME,
  theme
}); 