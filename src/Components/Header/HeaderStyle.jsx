import styled from "styled-components";

export const HeaderStyled = styled.header`
  max-width: 1200px;
  margin: auto;

  display: flex;
  justify-content: space-between;

  align-items: center;

  margin: 4rem 10rem;

  .Input {
    width: 25rem;
    height: 3rem;

    background-color: #ffffff;
    border-radius: 1rem;

    padding-right: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      outline: none;

      border-radius: 1rem;
      border: none;

      padding-left: 1rem;
      margin-left: 1rem;
    }
    .icon {
      cursor: pointer;
    }
  }
`;

export const LogoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    object-fit: contain;

    height: 5rem;
  }
  h1 {
    color: ${(themes) => themes.theme.colors.secondary};
  }
`;
