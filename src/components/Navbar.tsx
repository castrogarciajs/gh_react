export function Navbar() {
  return (
    <nav>
      <h1>Github Api</h1>

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
