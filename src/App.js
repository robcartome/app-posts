import React from "react";
import styled from "@emotion/styled";
import ListPosts from "./components/ListPosts";
import Footer from "./components/Footer";
import { useState } from "react";
import SearchForm from "./components/SearchForm";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = (state) => {
    if (state === undefined) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(state);
    }
  };

  return (
    <Wrapper>
      <SearchForm/>
      <ListPosts />
      <Footer isOpen={isOpen} toggleOpen={toggleOpen} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* overflow: auto; */
  margin: auto;
  height: 100vh;
  color: #333333;
  max-width: 900px;
  font-size: 1.5em;
  padding: 30px;
  
`;

export default App;
