import { styled } from "styled-components";

export const CardStyled = styled.div`
  max-width: 1200px;
  margin: auto;

  color: black;

  height: 30rem;
  width: 33rem;

  border-radius: 30px;
  border: none;

  background-color: ${(themes) => themes.theme.colors.secondary};
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.212);

  img {
    object-fit: contain;
    margin-top: 8.5rem;
    width: 100%;

    border-radius: 3px 3px 30px 30px;
  }

  text-align: center;

  h1 {
    margin-top: 10px;
  }
`;
