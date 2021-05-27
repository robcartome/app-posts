import { useState } from "react";
import InputText from "./UI/InputText";
import InputTextArea from "./UI/InputTextArea";
import styled from "@emotion/styled";
import { fetchCreatePost } from "../features/posts/PostsSlice";
import { useDispatch , useSelector } from "react-redux";

export default function CreateForm({ isOpen, toggleOpen }) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);

  const initialState = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const reset = () => {
    setFormData(initialState);
  };

  const validForm = () =>
    Object.values(formData).every((value) => value !== "");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCreatePost({formData, postsData : posts}))
    reset();
    toggleOpen(false);
  };

  return (
    <Form isOpen={isOpen} onSubmit={handleSubmit}>
      <InputText
        label="Nombre"
        required={true}
        name="name"
        placeholder="Nombre..."
        value={formData.name}
        onChange={handleChange}
        type="text"
      />
      <InputTextArea
        label="Descripcion"
        required={true}
        name="description"
        placeholder="Escriba el Post..."
        value={formData.description}
        onChange={handleChange}
        type="text"
      />
      <SubmitButton type="submit" disabled={!validForm()}>
        Crear POST
      </SubmitButton>
    </Form>
  );
}

const Form = styled.form`
  height: 150px;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
`;

const SubmitButton = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: ${"#3685E2"};
  color: white;
  cursor: pointer;
  font-size: 1.3rem;
  :disabled {
    cursor: not-allowed;
    background-color: ${"#BDBDBD"};
  }
`;