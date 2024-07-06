import styled, { css } from "styled-components";

const Button = styled.button`
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 0.8rem 2rem;
  cursor: pointer;

  // Props Variant
  background-color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["primary"]};

  // Props Full
  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}

  // Props Size
  ${(props) =>
    props.size &&
    css`
      font-size: ${props.theme.sizes[props.size].fontSize};
      padding: ${props.theme.sizes[props.size].padding};
    `}
`;

export default Button;
