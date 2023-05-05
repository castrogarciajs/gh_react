import { ProfileProp } from "../utils/types";

export function Profile({ username }: ProfileProp) {
  return (
    <div>
      <div>
        <img src={username.avatar_url} alt={username.login} />
      </div>

      <div>
        <a href={username.html_url}>Github</a>
      </div>
    </div>
  );
}
