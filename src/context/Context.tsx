import { createContext, useEffect, useState } from "react";
import { ContextProp, Ctx } from "../utils/types";

export const context = createContext<Ctx | null>(null);

interface User {
  avatarUrl: string;
  github: string;
  login: string;
}

export function ContextProvider({ children }: ContextProp) {
  const [username, setUsername] = useState<User | null>();

  const SEBASTIAN = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_GITHUB_USERNAME}/sebastian009w`
    );

    const data: User = await res.json();

    if (!data) return console.log("User Not found");

    console.log(data);
  };
  return (
    <context.Provider
      value={{
        SEBASTIAN,
      }}
    >
      {children}
    </context.Provider>
  );
}
