import styled from "styled-components";

export const HeaderStyled = styled.header`
  max-width: 1200px;
  margin: auto;

  display: flex;
  justify-content: space-between;

  align-items: center;

  margin: 4rem 10rem;

  @media (max-width: 715px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 498px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
`;
