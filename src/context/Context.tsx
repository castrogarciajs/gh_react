import { createContext, useEffect, useState } from "react";
import { ContextProp, Ctx, User } from "../utils/types";

export const context = createContext<Ctx | null>(null);

export function ContextProvider({ children }: ContextProp) {
  const [username, setUsername] = useState<User | null>(null);

  const GET = async (profile) => {
    const res = await fetch(
      `${import.meta.env.VITE_GITHUB_USERNAME}/${profile}`
    );

    const data = await res.json();
    console.log(data);
  };
  return (
    <context.Provider
      value={{
        username,
        GET,
      }}
    >
      {children}
    </context.Provider>
  );
}
