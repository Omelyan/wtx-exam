import { useContext } from "react";

import { LayoutContext } from "~/context";

export function useLayout() {
  return useContext(LayoutContext);
}
