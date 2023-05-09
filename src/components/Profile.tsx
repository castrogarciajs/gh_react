import { ProfileProp } from "../utils/types";

export function Profile({ username }: ProfileProp) {
  return (
    <div className="card-profile">
      <div className="card-image">
        <img src={username.avatar_url} alt={username.login} />
      </div>

      <div className="card-network">
        <p>{username.login}</p>
        <a href={username.html_url} target="_blank" className="card-link">
          <button className="card-button">Follow me</button>
        </a>
      </div>
      <div className="card-follow">
        <p>followers: {username.followers}</p>
        <p>following: {username.following}</p>
      </div>
    </div>
  );
}
