import { IRepositories } from "../utils/types";

type PropRepos = {
  data: IRepositories[];
};
export function Repositories({ data }: PropRepos) {
  return (
    <>
      {data.map((repos) => (
        <div className="repos-card" key={repos.id}>
          <div className="repos-name">
            <a href={repos.html_url}>
              <p>{repos.name}</p>
            </a>
          </div>
          <div className="repos-body">
            <span>{repos.description}</span>
            <span>{repos.language}</span>
          </div>
        </div>
      ))}
    </>
  );
}
