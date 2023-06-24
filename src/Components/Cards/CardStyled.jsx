import { styled } from "styled-components";

export const CardStyled = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
  }

  h1 {
    margin-top: 1rem;
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }

  p {
    margin-top: 0.5rem;
    font-size: 14px;
    line-height: 1.4;
    color: #777;
  }

  h3 {
    margin-top: 0.5rem;
    font-size: 16px;
    font-weight: bold;
    color: ${(Themes) => Themes.theme.colors.primary};
  }

  h4 {
    margin-top: 0.3rem;
    font-size: 14px;
    color: #999;
  }
`;
