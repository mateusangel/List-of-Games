import styled from "styled-components";

export const MainStyled = styled.main`
  max-width: 1200px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 350px));
  grid-gap: 15px 15px;
  justify-content: center;
  align-items: baseline;
`;
