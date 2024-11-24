import { ThemeState } from "@/store/interface";
import * as types from "@/store/mutation-types";

export const setTheme = (theme: ThemeState) => ({
  type: types.SET_THEME,
  theme
}); 