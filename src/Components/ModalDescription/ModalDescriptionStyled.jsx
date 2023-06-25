import { styled } from "styled-components";

export const ModalDescriptionStyled = styled.div`
  max-width: 800px;
  background-color: #ffffff;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .custom-color {
    color: #1d42cf;
  }
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 28px;
    margin: 0;
  }

  .iconBy {
    font-size: 28px;
    cursor: pointer;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
    object-fit: cover;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }

  .modal-info {
    width: 100%;
    text-align: center;
  }

  p {
    margin: 8px 0;
    font-size: 18px;
  }

  .genre {
    font-weight: bold;
    font-size: 20px;
  }

  .modal-links {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    background-color: #333333;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }

  @media (max-width: 1324px) {
    width: 600px;
    height: 400px;
    p {
      font-size: 16px;
    }
    img {
      width: 100px;
    }
    .modal-links {
      width: 10px;
      height: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 13rem;
      gap: 1rem;
      a {
        text-align: center;
      }
    }
  }
  @media (max-width: 506px) {
    max-width: 100%;

    h1 {
      font-size: 22px;
    }

    .iconBy {
      font-size: 24px;
    }

    img {
      max-width: 100%;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
    }

    .genre {
      font-size: 18px;
    }
    .modal-links {
      margin-left: 23rem;
      margin-top: -4rem;
      max-width: max-content;
      a {
        margin-left: 1rem;
      }
    }

    a {
      font-size: 12px;
    }
  }

  @media (max-width: 386px) {
    max-width: 100%;
    padding: 10px;

    h1 {
      font-size: 20px;
    }

    .iconBy {
      font-size: 20px;
    }

    img {
      max-width: 100%;
      margin-bottom: 10px;
    }

    p {
      font-size: 15px;
    }

    .genre {
      font-size: 15px;
    }

    .modal-links {
      margin-left: 20rem;

      max-width: max-content;
    }

    a {
      padding: 8px 16px;
      font-size: 10px;
    }
  }
`;
