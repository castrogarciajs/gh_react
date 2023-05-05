import { useEffect, useState } from "react";
import { User } from "./utils/types";

import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Profile } from "./components/Profile";

function App() {
  const [sebastian, setSebastian] = useState<User | null>(null);

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
  }, []);

  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        {sebastian ? <Profile username={sebastian} /> : "User Not Found"}
      </Main>
    </>
  );
}

export default App;
