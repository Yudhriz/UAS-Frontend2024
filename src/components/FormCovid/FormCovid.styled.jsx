import styled from "styled-components";

const StyledForm = styled.div`
  margin: 1rem;

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .form__left {
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  h2 {
    color: #afaab9;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 10px;
    text-align: left;
    color: #64748b;
    margin-top: 0.3rem;
  }

  .form__input {
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #afaab9;
    border-radius: 4px;
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;

    section {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: center;
    }

    .form__left {
      flex-basis: 50%;
    }

    .form__right {
      flex-basis: 50%;
    }
  }
`;

export default StyledForm;