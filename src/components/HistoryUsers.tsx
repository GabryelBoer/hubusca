type BasicUserProps = {
  avatar_url: string;
  id: number;
  login: string;
  name: string;
  location: string;
};

type userHistory = {
  users: BasicUserProps[];
  loadUser: (login: string) => Promise<void>;
  clearHistory: (clear: boolean) => void;
};

import { MdLocationPin } from "react-icons/md";

import * as C from "./HistoryUsers.styles";

const HistoryUsers = ({ users, loadUser, clearHistory }: userHistory) => {
  return (
    <C.Container>
      <C.Header>
        <C.Title>Recentes</C.Title>
        <C.Clear onClick={() => clearHistory(true)}>Limpar Histórico</C.Clear>
      </C.Header>
      {users.map((data) => (
        <C.Profile key={data.login} onClick={() => loadUser(data.login)}>
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

export default HistoryUsers;
