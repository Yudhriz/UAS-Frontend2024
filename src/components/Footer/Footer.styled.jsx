import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: #afaab9;
  color: #fff;
  padding: 1rem;

  footer {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    footer {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h2 {
      margin: 0;
      margin-left: 1rem;
    }

    p {
      margin: 0;
      margin-bottom: 1rem;
      margin-left: 1rem;
    }
  }
`;

export default StyledFooter;