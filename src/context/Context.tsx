import { createContext, useEffect, useState } from "react";
import { ContextProp, Ctx, User } from "../utils/types";

export const context = createContext<Ctx | null>(null);

export function ContextProvider({ children }: ContextProp) {
  const [username, setUsername] = useState<User | null>(null);

  return (
    <context.Provider
      value={{
        username,
      }}
    >
      {children}
    </context.Provider>
  );
}
