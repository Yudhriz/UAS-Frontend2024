import styled from "styled-components";

const StyledCard = styled.div`
  margin: 1rem;
  flex: 1 1 30%;
  box-sizing: border-box;

  section {
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }

  .card__body {
    padding: 20px;
  }

  h2 {
    margin: 0;
    color: #a5243d;
    font-size: 2rem;
  }

  p {
    color: #64748b;
    font-size: 1rem;
  }
`;

export default StyledCard;