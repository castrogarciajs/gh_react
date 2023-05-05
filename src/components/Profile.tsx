import { useProvider } from "../hooks/useContext";

export function Profile() {
  const { username } = useProvider();

  if (!username) return <p>username Not Found</p>;

  return (
    <div>
      <div>
        <img src={username.avatar_url} alt={username.login} />
      </div>
      <div>
        <a href={username.html_url} target="_blank">
          Github
        </a>
      </div>
    </div>
  );
}
