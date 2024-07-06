import styled from "styled-components";

const Heading = styled.h1.attrs((props) => ({
  as: props.as || "h1",
}))`
  color: ${(props) => props.color || "#fff"};
  font-size: ${(props) => {
    switch (props.size) {
      case "xl":
        return "2.5rem";
      case "lg":
        return "2rem";
      case "md":
        return "1.5rem";
      case "sm":
        return "1.25rem";
      case "xs":
        return "1rem";
      default:
        return "1.5rem";
    }
  }};
  margin-bottom: ${(props) => props.marginBottom || "1rem"};
`;

export default Heading;
