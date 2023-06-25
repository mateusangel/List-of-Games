import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  background-color: #000000df;
  color: #ffffff;

  margin: 0 auto;
  height: 100hv;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 10000;

  h1 {
    color: #000000;
    height: 300px;
    width: 600px;
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 40px;

    background-color: #ffffff;
    border-radius: 30px;

    @media (max-width: 667px) {
      width: 80%;
    }
  }

  .iconErr {
    font-size: 70px;

    position: relative;
    bottom: 120px;
    @media (max-width: 667px) {
      width: 80%;
    }
  }

  .iconBy {
    font-size: 40px;

    position: relative;

    left: 260px;
    top: 55px;

    cursor: pointer;

    @media (max-width: 667px) {
      left: 140px;
      width: 80%;
    }
    @media (max-width: 524px) {
      left: 100px;
      width: 80%;
    }
    @media (max-width: 524px) {
      left: 100px;
      width: 80%;
    }
    @media (max-width: 404px) {
      left: 60px;
      width: 80%;
    }
  }

  @media (max-width: 667px) {
    width: 80%;
  }
`;
