/**
 * @see https://ui.shadcn.com/docs/dark-mode/vite
 */

import { ThemeContext } from "@contexts/theme-context/theme-context.ts";
import { useContext } from "react";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a theme-provider");

  return context;
};
