import { FormEvent, useState } from "react";
import { FormEventSubmit } from "../utils/types";
import { useProvider } from "../hooks/useContext";
import githubLogo from "../assets/github-mark-white.svg";

export function Navbar() {
  return (
    <nav role="navigation">
      <div className="containerLogo">
        <img src={githubLogo} alt="github" />
      </div>
      <Search />
      <ul className="list-navbar">
        <li>Pull Requests</li>
        <li>Issues</li>
        <li>Codespaces</li>
        <li>Marketplace</li>
        <li>Explore</li>
      </ul>
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
        placeholder="Search or jump to..."
        className="form-search-text"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </form>
  );
}
