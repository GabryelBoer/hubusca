import { UserProps } from "../types/user";

import { MdLocationPin } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { MdArrowBack } from "react-icons/md";

import * as C from "./User.styles";
import Repo from "../components/Repo";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/layout/Loading";

type RepoProps = {
  name: string;
  id: number;
  description: string;
  html_url: string;
  created_at: string;
  pushed_at: string;
  language: string;
};

const User = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { userName } = useParams();

  useEffect(() => {
    const loadUser = async function (loginUser: string) {
      setIsLoading(true);
      const userResponse = await axios.get(
        `https://api.github.com/users/${loginUser}`
      );
      const reposReponse = await axios.get(
        `https://api.github.com/users/${loginUser}/repos`
      );

      const dataUser: UserProps = userResponse.data;
      const dataRepos: RepoProps[] = reposReponse.data;

      const data: UserProps = { ...dataUser, repos: dataRepos };

      const {
        avatar_url,
        login,
        name,
        id,
        location,
        followers,
        public_repos,
        repos: repoData,
      } = data;

      const reposInfo: RepoProps[] = repoData.map((repo: any) => ({
        name: repo.name,
        id: repo.id,
        description: repo.description,
        html_url: repo.html_url,
        created_at: repo.created_at,
        pushed_at: repo.pushed_at,
        language: repo.language,
      }));

      const userData: UserProps = {
        avatar_url,
        login,
        name,
        id,
        location,
        followers,
        public_repos,
        repos: reposInfo,
      };
      setUser(userData);
      setIsLoading(false);
    };
    if (userName) {
      loadUser(userName);
    }
  }, [user]);

  if (!user && isLoading) return <Loading />;

  return (
    <C.Container>
      <C.Icon>
        <Link to={"/"}>
          <MdArrowBack size={"1.7em"} />
        </Link>
      </C.Icon>
      <C.Profile>
        <C.ProfileImg src={user?.avatar_url} alt={user?.login} />
        <C.Credentials>
          <C.Name>{user?.name}</C.Name>
          <C.UserNameID>
            {user?.login} | {user?.id}
          </C.UserNameID>
        </C.Credentials>
        <C.LastContainer>
          {user?.location && (
            <C.LocationContainer>
              <MdLocationPin />
              <C.LocationText>{user?.location}</C.LocationText>
            </C.LocationContainer>
          )}
          <C.Stats>
            <IoPerson />
            <C.TextNumber>{user?.followers} Seguidores</C.TextNumber>
          </C.Stats>
        </C.LastContainer>
      </C.Profile>
      <Repo repos={user?.repos || []} publicRepos={user?.public_repos || 0} />
    </C.Container>
  );
};

export default User;
