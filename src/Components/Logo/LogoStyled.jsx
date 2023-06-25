import styled from "styled-components";

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

    @media (max-width: 715px) {
      font-size: 15px;
      width: max-content;
    }
  }

  @media (max-width: 530px) {
    max-width: 600px;
  }
`;
