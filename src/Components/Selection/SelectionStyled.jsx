import styled from "styled-components";

export const SelectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin-left: 13rem;
  margin-bottom: 2rem;

  label {
    margin-bottom: 1rem;
    color: white;
    font-size: 1.6rem;
  }

  @media (max-width: 498px) {
    margin: 50px auto;
  }
`;
