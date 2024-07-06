import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: #afaab9;
  padding: 1rem;
  color: #fff;

  nav {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      margin: 0;
      margin-left: 1rem;
    }
  }
`;

export default StyledNavbar;