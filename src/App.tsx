import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <div role="main" className="App">
        <h2>Github Api</h2>
      </div>
    </>
  );
}

export default App;
