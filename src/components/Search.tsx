type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
  inputFocus: (inputActive: boolean) => void;
};

import { useState, KeyboardEvent, useEffect, ChangeEvent, useRef } from "react";

import { FaSearch } from "react-icons/fa";

import * as C from "./Search.styles";

const Search = ({ loadUser, inputFocus }: SearchProps) => {
  const [userName, setUserName] = useState("");
  const [typingTimeout, setTypingTimeout] = useState<number | null>(null);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleTypingFinished = () => {
    if (!searchButtonClicked && userName.length > 2) {
      loadUser(inputRef.current?.value || "");
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == "Enter" && userName.length > 3) {
      loadUser(inputRef.current?.value || "");
      setSearchButtonClicked(true);
    }
  };

  const handleInputFocus = () => {
    inputFocus(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      inputFocus(false);
    }, 100);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (e.target.value === "") {
      inputFocus(true);
    } else {
      inputFocus(false);
    }

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    setUserName(value);
    setSearchButtonClicked(false);

    const timeout = setTimeout(() => {
      handleTypingFinished();
    }, 1000);
    setTypingTimeout(timeout);
  };

  const handleSearchButtonClick = () => {
    if (userName.length > 3) {
      setSearchButtonClicked(true);
      loadUser(inputRef.current?.value || "");
    }
  };

  useEffect(() => {
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [userName, typingTimeout, searchButtonClicked]);

  return (
    <>
      <C.Container>
        <C.SearchContainer>
          <C.SearchInput
            type="text"
            ref={inputRef}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Digite o nome do usuário"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <C.SearchButton onClick={handleSearchButtonClick}>
            <FaSearch fill="black" />
          </C.SearchButton>
        </C.SearchContainer>
      </C.Container>
    </>
  );
};

export default Search;
