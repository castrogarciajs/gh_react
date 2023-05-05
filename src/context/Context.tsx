import { createContext, useEffect, useState } from "react";
import { ContextProp, Ctx, User } from "../utils/types";

export const context = createContext<Ctx | null>(null);

export function ContextProvider({ children }: ContextProp) {
  const [username, setUsername] = useState<User | null>(null);

  const SEBASTIAN = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_GITHUB_USERNAME}/sebastian009w`
    );

    const data: User = await res.json();

    if (!data) return console.log("User Not found");

    setUsername({ ...data });
  };
  return (
    <context.Provider
      value={{
        username,
        SEBASTIAN,
      }}
    >
      {children}
    </context.Provider>
  );
}
