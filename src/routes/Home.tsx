import { UserProps } from "../types/user";
import axios from "axios";

import Search from "../components/Search";
import Error from "../components/Error";

import { useState } from "react";
import { TSearch } from "../types/search";
import SearchUser from "../components/SearchUser";
import Loading from "../components/layout/Loading";
import HistoryUsers from "../components/HistoryUsers";

type BasicUserProps = {
  avatar_url: string;
  login: string;
  id: number;
  name: string;
  location: string;
};

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<BasicUserProps | null>(null);
  const [tempUsers, setTempUsers] = useState<BasicUserProps[] | null>(null);
  const [error, setError] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);
  const [searchHistory, setSearchHistory] = useState<BasicUserProps[]>(
    JSON.parse(localStorage.getItem("searchHistory") || "[]")
  );

  const searchUser = async (userName: string) => {
    setIsLoading(true);
    setUser(null);
    setError(false);

    const searchResponse = await axios.get(
      `https://api.github.com/search/users?q=${userName}`
    );

    const searchData: TSearch = searchResponse.data;

    const { items: dataSearch } = searchData;

    const logins: string[] = dataSearch.map((data) => data.login).slice(0, 5);
    if (logins.length === 0) {
      setError(true);
      return;
    }
    loadBasicUserData(logins);
  };

  const loadBasicUserData = async (userLogins: string[]) => {
    const allUsers: BasicUserProps[] = [];

    for (const logins of userLogins) {
      const userResponse = await axios.get(
        `https://api.github.com/users/${logins}`
      );

      const dataUser: BasicUserProps = userResponse.data;

      const data: BasicUserProps = { ...dataUser };

      const { avatar_url, login, name, location, id } = data;

      const userData: BasicUserProps = {
        avatar_url,
        id,
        login,
        name,
        location,
      };
      if (userData.login) {
        allUsers.push(userData);
      }
    }
    setTempUsers(allUsers);
    setIsLoading(false);
  };

  const loadUser = async (loginUser: string) => {
    const userResponse = await axios.get(
      `https://api.github.com/users/${loginUser}`
    );

    const dataUser: BasicUserProps = userResponse.data;

    const data: BasicUserProps = { ...dataUser };

    const { avatar_url, login, id, name, location } = data;

    const userData: BasicUserProps = {
      avatar_url,
      login,
      id,
      name,
      location,
    };
    setUser(userData);

    const existingUser = searchHistory.find(
      (item: BasicUserProps) => item.id === userData.id
    );

    if (!existingUser) {
      // Adiciona o novo usuário ao histórico apenas se ele não existir
      const updatedHistory = [
        ...searchHistory,
        {
          avatar_url: userData.avatar_url,
          login: userData.login,
          name: userData.name,
          id: userData.id,
          location: userData.location,
        },
      ].reverse();
      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
      setSearchHistory(updatedHistory);
    }
  };

  const handleInputFocus = (isActive: boolean) => {
    setIsInputActive(isActive);
  };

  const clearHistory = (clear: boolean): void => {
    if (clear) {
      setSearchHistory([]);
      localStorage.removeItem("searchHistory");
    }
  };
  return (
    <div>
      {!user && <Search inputFocus={handleInputFocus} loadUser={searchUser} />}

      {isLoading && !error && <Loading />}

      {searchHistory.length !== 0 && isInputActive && tempUsers === null && (
        <HistoryUsers users={searchHistory} clearHistory={clearHistory} />
      )}

      {tempUsers && !user && !isLoading && (
        <SearchUser users={tempUsers} loadUser={loadUser} />
      )}

      {error && <Error />}
    </div>
  );
};

export default Home;
