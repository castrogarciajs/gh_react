export function Navbar() {
  return (
    <nav role="navigation">
      <h1>GITHUB USERNAME</h1>
      <Search />
    </nav>
  );
}

function Search() {
  return (
    <form className="form-search">
      <input
        type="text"
        placeholder="Que usuario quieres ver ?"
        className="form-search-text"
      />
      <button type="submit" className="form-search-button">
        Buscar
      </button>
    </form>
  );
}
