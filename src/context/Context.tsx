import { createContext } from "react";
import { ContextProp, Ctx } from "../utils/types";

export const context = createContext<Ctx | null>(null);

export function ContextProvider({ children }: ContextProp) {
  return (
    <context.Provider
      value={{
        name: "sebastian",
      }}
    >
      {children}
    </context.Provider>
  );
}
