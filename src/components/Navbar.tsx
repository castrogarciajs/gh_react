import { FormEvent, useState } from "react";
import { FormEventSubmit } from "../utils/types";
import { useProvider } from "../hooks/useContext";
import githubLogo from "../assets/github-mark-white.svg";

export function Navbar() {
  return (
    <nav role="navigation">
      <div className="containerLogo">
        <img src={githubLogo} alt="react" />
      </div>
      <Search />
    </nav>
  );
}

function Search() {
  const [username, setUsername] = useState("");
  const { GET } = useProvider();
  const handleSubmit: FormEventSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      GET(username);
      setUsername("");
    } catch (error) {
      throw new Error("Error server");
    }
  };

  return (
    <form className="form-search" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Que usuario quieres ver ?"
        className="form-search-text"
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit" className="form-search-button">
        SEARCH
      </button>
    </form>
  );
}
