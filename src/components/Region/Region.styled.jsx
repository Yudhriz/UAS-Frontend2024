import styled from "styled-components";

const StyledRegion = styled.div`
  padding: 0.5rem;
  margin: 1rem;

  section {
    margin: 5rem 0;
    text-align: center;
  }

  h2 {
    color: #afaab9;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  h3 {
    color: #b48291;
    margin-bottom: 1rem;
  }

  .card__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }

  .card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin: 8px;
    flex: 1 1 calc(33.333% - 32px); /* Ensure three cards per row */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
  }

  .card__body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .card__title {
    color: #343a40;
    font-size: 1.25rem;
    margin-bottom: 8px;
    text-align: center;
    width: 100%;
  }

  .card__description {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 1rem;
    margin: 4px 0;
  }

  .card__value {
    font-size: 1.25rem;
    font-weight: bold;
    margin-right: 8px;
  }

  .confirmed .card__value {
    color: green;
  }

  .recovered .card__value {
    color: blue;
  }

  .death .card__value {
    color: red;
  }

  .icon {
    margin-left: 8px;
  }
`;

export default StyledRegion;
