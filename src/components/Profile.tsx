import { ProfileProp } from "../utils/types";

export function Profile({ username }: ProfileProp) {
  return (
    <div className="card-profile">
      {!username ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="card-image">
            <img src={username.avatar_url} alt={username.login} />
          </div>

          <div className="card-network">
            <p>{username.login}</p>
            <a href={username.html_url}>Github</a>
          </div>
        </>
      )}
    </div>
  );
}
