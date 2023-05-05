import { useProvider } from "../hooks/useContext";

export function Profile() {
  const { sebastian } = useProvider();

  if (!sebastian) return <p>username Not Found</p>;

  return (
    <div>
      <div>
        <img src={sebastian.avatar_url} alt={sebastian.login} />
      </div>
      <div>
        <a href={sebastian.html_url} target="_blank">
          Github
        </a>
      </div>
    </div>
  );
}
