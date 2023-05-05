import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Profile } from "./components/Profile";

import { useEffect } from "react";
import { useProvider } from "./hooks/useContext";

function App() {
  const { SEBASTIAN } = useProvider();

  useEffect(() => {
    SEBASTIAN();
  });
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Profile />
      </Main>
    </>
  );
}

export default App;
