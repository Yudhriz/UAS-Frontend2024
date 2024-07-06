import styled from "styled-components";

const StyledMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  li {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    li {
      margin: 0 1rem;
    }
  }
`;

export default StyledMenu;
