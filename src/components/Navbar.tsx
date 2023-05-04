export function Navbar() {
  return (
    <nav>
      <div>
        <h1>Github Api</h1>
      </div>
      <div>
        <Search />
      </div>
    </nav>
  );
}

function Search() {
  return (
    <form>
      <input type="text" placeholder="Que usuario quieres ver ?" />
      <button type="submit">Buscar</button>
    </form>
  );
}
