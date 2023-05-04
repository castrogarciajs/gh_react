import { createContext, ReactNode } from "react";

interface Data {
  name: string;
}
interface ContextProp {
  children: ReactNode;
}
export const context = createContext<Data | null>(null);

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
