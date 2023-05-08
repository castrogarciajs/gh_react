import { useEffect, useState } from "react";
import { useProvider } from "./hooks/useContext";
import { User, IRepositories } from "./utils/types";

import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Profile } from "./components/Profile";
import { UserNotFound } from "./components/_404";
import { Repositories } from "./components/Repositories";

function App() {
  const [sebastian, setSebastian] = useState<User>({
    login: "",
    avatar_url: "",
    html_url: "",
  });
  const [repos, setRepos] = useState<IRepositories[] | null>([]);
  const { username, userNotFound, repositorios } = useProvider();

  useEffect(() => {
    const SEBASTIAN = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_GITHUB_USERNAME}/sebastian009w`
        );

        const data: User = await res.json();

        if (!data) return console.log("User Not found");

        setSebastian({ ...data });
      } catch (error) {
        throw new Error(`ERROR: ${error}`);
      }
    };

    SEBASTIAN();

    const startRepos = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_GITHUB_USERNAME}/sebastian009w/repos`
      );
      const data: IRepositories[] = await res.json();
      if (!data) return console.log("not fpund");

      setRepos(data);
    };
    startRepos();
  }, []);

  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        {userNotFound ? (
          <UserNotFound />
        ) : !username ? (
          <div className="header-github">
            <div>
              <Profile username={sebastian} />
            </div>

            <div>
              <Repositories data={repos} />
            </div>
          </div>
        ) : (
          <>
            <Profile username={username} />
            <Repositories data={repositorios} />
          </>
        )}
      </Main>
    </>
  );
}

export default App;
