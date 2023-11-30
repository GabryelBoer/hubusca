import * as C from "./Repo.styles";
import converterData from "../util/converterData";
import { FaCircle } from "react-icons/fa";

type RepoProps = {
  name: string;
  id: number;
  description: string;
  html_url: string;
  created_at: string;
  pushed_at: string;
  language: string;
};

type ReposProps = {
  repos: RepoProps[];
  publicRepos: number;
};

const Repo = ({ repos, publicRepos }: ReposProps) => {
  function ballColor(lang: string) {
    let color: string = "";
    switch (lang) {
      case "TypeScript":
        color = "#3178C6";
        break;

      case "HTML":
        color = "#E34C26";
        break;

      case "CSS":
        color = "#563D7C";
        break;

      case "JavaScript":
        color = "#F1E05A";
        break;

      case "Shell":
        color = "#89E051";
        break;

      case "PHP":
        color = "#4F5D95";
        break;

      case "Python":
        color = "#3572A5";
        break;

      case "Java":
        color = "#B07219";
        break;

      default:
        color = "white";
    }
    return color;
  }
  return (
    <C.Container>
      <C.Title>{publicRepos} Repositórios Públicos</C.Title>
      {repos.map((repo) => (
        <C.List key={repo.id}>
          <C.RepoTitle target="_blank" href={`${repo.html_url}`}>
            {repo.name}
          </C.RepoTitle>
          <C.Desc>{repo.description}</C.Desc>
          {repo.language && (
            <C.Lang>
              <FaCircle size={"0.7em"} fill={ballColor(repo.language)} />{" "}
              {repo.language}
            </C.Lang>
          )}
          <C.Info1>
            {`Data de criação: ${converterData(repo.created_at)}
            Último push: ${converterData(repo.pushed_at)}`}
          </C.Info1>
        </C.List>
      ))}
      <C.Border />
    </C.Container>
  );
};

export default Repo;
