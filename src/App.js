import React from "react";
import styled from "@emotion/styled";
import ListPosts from "./components/ListPosts";

function App() {
  return (
  <Wrapper>
      <ListPosts/>
  </Wrapper>);
}

const Wrapper = styled.div`
  overflow: auto;
  margin: auto;
  height: 100vh;
  /* border-radius: 20px; */
  color: #333333;
  max-width: 900px;
 /*  background: white ; */
  font-size: 1.5em;
  padding: 30px;
`;

export default App;
