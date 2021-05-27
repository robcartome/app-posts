import styled from "@emotion/styled";
import { useRef, useEffect } from "react";
import CreateForm from "./CreateForm";

import { useSelector } from "react-redux";



export default function Footer({ onCreate, isOpen, toggleOpen }) {
  const formRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        /* console.log("Click outside!"); */
        toggleOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleOpen]);

  return (
    <Container isOpen={isOpen} onClick={toggleOpen} ref={formRef}>
      <Title>Nuevo Post</Title>
      <CreateForm isOpen={isOpen} onCreate={onCreate} />
    </Container>
  );
}

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.25);
  height: ${(props) => (props.isOpen ? "360px" : "74px")};
  position: fixed;
  padding: 10px 0 25px 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.isOpen ? "inherit" : "pointer")};
  flex-direction: column;
  overflow: hidden;
  transition: all 500ms;
`;

const Title = styled.h3`
  margin-bottom: 15px;
`;