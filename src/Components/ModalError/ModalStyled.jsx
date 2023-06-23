import { styled } from "styled-components";

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
  }

  .iconErr {
    font-size: 100px;

    position: relative;
    bottom: 120px;
  }

  .iconBy {
    font-size: 40px;

    position: relative;

    left: 260px;
    top: 55px;

    cursor: pointer;
  }
`;
