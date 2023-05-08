import { IRepositories } from "../utils/types";

type PropRepos = {
  data: IRepositories[];
};
export function Repositories({ data }: PropRepos) {
  return (
    <div>
      {data.map((repos) => (
        <>
          <p>{repos.name}</p>
        </>
      ))}
    </div>
  );
}
