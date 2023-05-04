import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";

function App() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <h1>Hello world</h1>
      </Main>
    </>
  );
}

export default App;
