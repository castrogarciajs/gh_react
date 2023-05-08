import { createContext, useState } from "react";
import { ContextProp, Ctx, User, IRepositories } from "../utils/types";

export const context = createContext<Ctx | null>(null);

export function ContextProvider({ children }: ContextProp) {
  const [username, setUsername] = useState<User | null>(null);
  const [repositorios, setRepositorios] = useState<IRepositories[] | null>(
    null
  );
  const [userNotFound, setUserNotFound] = useState(false);

  const GET = async (profile: string) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_GITHUB_USERNAME}/${profile}`
      );
      if (res.status === 404) {
        setUserNotFound(true);
        return;
      }
      const data: User = await res.json();
      if (!data) return console.log("Not Data");

      setUsername(data);
      setUserNotFound(false);
    } catch (error) {
      throw new Error(`ERROR: ${error}`);
    }
  };
  const REPOSITORIES = async (profile: string) => {
    const res = await fetch(
      `${import.meta.env.VITE_GITHUB_USERNAME}/${profile}/repos`
    );
    const data: IRepositories[] = await res.json();
    if (!data) return console.log("Not Data");

    setRepositorios(data);
  };
  return (
    <context.Provider
      value={{
        username,
        repositorios,
        userNotFound,
        GET,
        REPOSITORIES,
      }}
    >
      {children}
    </context.Provider>
  );
}
