import { IRepositories } from "../utils/types";

type PropRepos = {
  data: IRepositories[] | null;
};
export function Repositories({ data }: PropRepos) {
  console.log(data);
  return (
    <>
      {!data ? (
        <p>no found</p>
      ) : (
        data.map((repos) => (
          <div className="repos-card" key={repos.id}>
            <div className="repos-name">
              <a href={repos.html_url} target="_blank">
                <p>{repos.name}</p>
              </a>
            </div>
            <div className="repos-body">
              {repos.description ? (
                <p>{repos.description}</p>
              ) : (
                <p>No Content</p>
              )}
              <span>{repos.language}</span>
            </div>
          </div>
        ))
      )}
    </>
  );
}
