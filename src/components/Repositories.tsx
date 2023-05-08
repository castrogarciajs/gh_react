import { IRepositories } from "../utils/types";

type PropRepos = {
  data: IRepositories[];
};
export function Repositories({ data }: PropRepos) {
  return (
    <div>
      {data.map((repos) => (
        <>
          <h2>{repos.name}</h2>
        </>
      ))}
    </div>
  );
}
