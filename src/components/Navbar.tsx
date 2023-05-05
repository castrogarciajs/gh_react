import { FormEvent, useEffect } from "react";
import { FormEventSubmit } from "../utils/types";
import { useProvider } from "../hooks/useContext";

export function Navbar() {
  return (
    <nav role="navigation">
      <h1>GITHUB USERNAME</h1>
      <Search />
    </nav>
  );
}

function Search() {
  const { GET } = useProvider();
  const handleSubmit: FormEventSubmit = (e: FormEvent<HTMLFormElement>) =>
    e.preventDefault();

  useEffect(() => {
    GET("ry");
  });
  return (
    <form className="form-search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Que usuario quieres ver ?"
        className="form-search-text"
        required
      />
      <button type="submit" className="form-search-button">
        SEARCH
      </button>
    </form>
  );
}
