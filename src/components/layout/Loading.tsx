import loading from "./svg/loading.svg";

import * as C from "./Loading.styles";

function Loading() {
  return (
    <C.Container>
      <C.Image src={loading} alt="Loading" />
    </C.Container>
  );
}

export default Loading;
