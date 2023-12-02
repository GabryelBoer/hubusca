type SearchedUsersProps = {
  login: string;
  id: number;
  name: string;
  avatar_url: string;
  location: string;
};

type SearchedUsers = {
  users: SearchedUsersProps[];
  loadUser: (login: string) => Promise<void>;
};

import { MdLocationPin } from "react-icons/md";

import * as C from "./SearchUser.styles";
import { Link } from "react-router-dom";

const SearchUser = ({ users, loadUser }: SearchedUsers) => {
  return (
    <C.Container>
      {users.map((data) => (
        <C.ContainerUsers key={data.id}>
          <Link to={`/user/${data.login}`} onClick={() => loadUser(data.login)}>
            <C.Profile>
              <C.ProfileImg src={data.avatar_url} alt={data.login} />
              <C.Credentials>
                <C.Name>{data.name}</C.Name>
                <C.UserNameID>{data.login}</C.UserNameID>
              </C.Credentials>
              <C.LastContainer>
                {data.location && (
                  <C.LocationContainer>
                    <MdLocationPin />
                    <C.LocationText>{data.location}</C.LocationText>
                  </C.LocationContainer>
                )}
              </C.LastContainer>
            </C.Profile>
          </Link>
        </C.ContainerUsers>
      ))}
    </C.Container>
  );
};

export default SearchUser;
