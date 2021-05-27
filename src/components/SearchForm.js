import styled from "@emotion/styled";
import { FcSearch } from "react-icons/fc";
export default function SearchForm() {
  return (
    <div>
      <Form>
        <input type="text" name="product_name" placeholder="Buscar" />
        <button>
          <FcSearch size="30"/>
        </button>
      </Form>
    </div>
  );
}

const Form = styled.form`
  padding: 8px 16px;
  width:100%;
  height: 35px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 32px;
  color: #b9b6b6;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  input {
    outline: none;
    border: 0;
    width: 100%;
  }
  button {
    background: #f8f9fa;
    border: none;
    outline: none;
    text-decoration: none;
    cursor: pointer;
  }
`;
