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

const SearchUser = ({ users, loadUser }: SearchedUsers) => {
  return (
    <C.Container>
      {users.map((data) => (
        <C.Profile key={data.id} onClick={() => loadUser(data.login)}>
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
      ))}
    </C.Container>
  );
};

export default SearchUser;
