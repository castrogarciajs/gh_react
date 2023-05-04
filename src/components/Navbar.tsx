import { FormEvent } from "react";
import { FormEventSubmit } from "../utils/types";

export function Navbar() {
  return (
    <nav role="navigation">
      <h1>GITHUB USERNAME</h1>
      <Search />
    </nav>
  );
}

function Search() {
  const handleSubmit: FormEventSubmit = (e: FormEvent<HTMLFormElement>) =>
    e.preventDefault();

  return (
    <form className="form-search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Que usuario quieres ver ?"
        className="form-search-text"
        required
      />
      <button type="submit" className="form-search-button">
        Buscar
      </button>
    </form>
  );
}
