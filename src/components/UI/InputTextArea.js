import styled from "@emotion/styled";
import { css } from "@emotion/react";

export default function InputTextArea({
  name,
  label,
  required = false,
  placeholder = "",
  value = "",
  onChange = () => {},
}) {
  return (
    <FieldWrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <TextArea
        id={name}
        name={name}
        required={required}
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
  line-height: 24px;
`;

const TextArea = styled.textarea(
  (props) => css`
    background: #ffffff;
    border: ${`1px solid ${props.error ? "#E25C3D": "#3685E2"}`};
    box-sizing: border-box;
    border-radius: 8px;
    padding: 8px 16px;
    font-family: "Roboto";
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