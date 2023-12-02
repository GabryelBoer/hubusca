import { Link, Outlet } from "react-router-dom";

import * as C from "./App.styles";

function App() {
  return (
    <C.Container>
      <Link to={"/"}>
        <C.Logo src="/logo.png" alt="Home"></C.Logo>
        <C.Title>HUBusca</C.Title>
      </Link>
      <Outlet />
    </C.Container>
  );
}

export default App;
