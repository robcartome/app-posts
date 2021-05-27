import styled from "@emotion/styled";
import { css } from "@emotion/react";


export default function InputText({
  name,
  label,
  required = false,
  type = "text",
  placeholder = "",
  error = "",
  value = "",
  onChange = () => {},
}) {
  return (
    <FieldWrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input
        id={name}
        name={name}
        required={required}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </FieldWrapper>
  );
}

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  font-size: 1.2rem;
  line-height: 20px;
`;

const Input = styled.input(
  (props) => css`
    background: #ffffff;
    border: ${`1px solid ${props.error ? "#E25C3D" : "#3685E2"}`};
    box-sizing: border-box;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 16px;
    line-height: 24px;

    ::placeholder {
      color: ${"#BDBDBD"};
    }

    :focus {
      border: 1px solid #3685e2;
      box-shadow: 0px 0px 6px #b78ccb;
      outline: none;
    }
  `
);
