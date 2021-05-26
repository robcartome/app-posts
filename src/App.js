import React from "react";
import styled from "@emotion/styled";

function App() {
  return <Wrapper>Posts</Wrapper>;
}

const Wrapper = styled.div`
  overflow: auto;
  margin: auto;
  height: 100vh;
  border-radius: 20px;
  color: red;
  background: #f6f6f9 ;
`;

export default App;
