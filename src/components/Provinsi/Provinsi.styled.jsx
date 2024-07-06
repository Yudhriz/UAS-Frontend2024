import styled from "styled-components";

const StyledProvinsi = styled.div`
  padding: 0.5rem;

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

  .table__container {
    overflow-x: auto;
    width: 100%;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 1rem;
  }

  thead th {
    color: #afaab9;
    padding: 0.5rem;
    vertical-align: bottom;
    border: 1px solid #64748b;
  }

  tbody td {
    padding: 0.75rem;
    color: #64748b;
    border: 1px solid #64748b;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .table__container {
      max-width: 800px;
      margin: 2rem auto;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .table__container {
      max-width: 1200px;
      margin: 2rem auto;
    }
  }
`;

export default StyledProvinsi;