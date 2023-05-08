import { useEffect, useState } from "react";
import { useProvider } from "./hooks/useContext";
import { User } from "./utils/types";

import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Profile } from "./components/Profile";
import { UserNotFound } from "./components/_404";

function App() {
  const [sebastian, setSebastian] = useState<User>({
    login: "",
    avatar_url: "",
    html_url: "",
  });
  const { username, userNotFound } = useProvider();

  useEffect(() => {
    const SEBASTIAN = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_GITHUB_USERNAME}/sebastian009w`,
          {
            method: "GET",
          }
        );

        const data: User = await res.json();

        if (!data) return console.log("User Not found");

        setSebastian({ ...data });
      } catch (error) {
        throw new Error(`ERROR: ${error}`);
      }
    };

    SEBASTIAN();
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
          <Profile username={sebastian} />
        ) : (
          <Profile username={username} />
        )}
        <div className="main-repositorios">
          <h2>repos</h2>
        </div>
      </Main>
    </>
  );
}

export default App;
