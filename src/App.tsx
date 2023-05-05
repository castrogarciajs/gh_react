import { useEffect, useState } from "react";
import { useProvider } from "./hooks/useContext";
import { User } from "./utils/types";

import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Profile } from "./components/Profile";

function App() {
  const [sebastian, setSebastian] = useState<User | null>(null);
  const { username } = useProvider();

  useEffect(() => {
    const SEBASTIAN = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_GITHUB_USERNAME}/sebastian009w`,
        {
          method: "GET",
        }
      );

      const data: User = await res.json();

      if (!data) return console.log("User Not found");

      setSebastian({ ...data });
    };

    SEBASTIAN();
  }, [sebastian]);

  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        {!username ? (
          <Profile username={sebastian} />
        ) : (
          <Profile username={username} />
        )}
      </Main>
    </>
  );
}

export default App;
