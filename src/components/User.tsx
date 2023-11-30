import { UserProps } from "../types/user";

import { MdLocationPin } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { MdArrowBack } from "react-icons/md";

import * as C from "./User.styles";
import Repo from "./Repo";

const User = ({
  login,
  id,
  name,
  avatar_url,
  followers,
  location,
  public_repos,
  repos,
}: UserProps) => {
  return (
    <C.Container>
      <C.Icon href="/">
        <MdArrowBack size={"1.7em"} />
      </C.Icon>
      <C.Profile>
        <C.ProfileImg src={avatar_url} alt={login} />
        <C.Credentials>
          <C.Name>{name}</C.Name>
          <C.UserNameID>
            {login} | {id}
          </C.UserNameID>
        </C.Credentials>
        <C.LastContainer>
          {location && (
            <C.LocationContainer>
              <MdLocationPin />
              <C.LocationText>{location}</C.LocationText>
            </C.LocationContainer>
          )}
          <C.Stats>
            <IoPerson />
            <C.TextNumber>{followers} Seguidores</C.TextNumber>
          </C.Stats>
        </C.LastContainer>
      </C.Profile>
      <Repo repos={repos} publicRepos={public_repos} />
    </C.Container>
  );
};

export default User;
