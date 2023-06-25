import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

export const InputContainer = styled.div`
  position: relative;
  @media (max-width: 715px) {
    display: flex;
    flex-direction: column;
    margin-left: 12rem;
    margin-bottom: 3rem;
  }
  @media (max-width: 498px) {
    display: flex;
    flex-direction: column;
    margin-left: 14rem;
    margin-bottom: 3rem;
  }
`;

export const InputField = styled.input`
  width: 200px;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #f2f2f2;
  transition: all 0.3s ease;
  position: absolute;
  outline: none;
  right: ${({ isOpen }) => (isOpen ? "0" : "-20px")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};

  @media (max-width: 715px) {
    display: flex;
    flex-direction: column;
    margin-left: 12rem;
    width: 14rem;
    align-items: center;
    justify-content: center;
  }
`;

export const ToggleButton = styled(BiSearchAlt)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color: ${({ isopen }) => (isopen ? "#1d42cf" : "#ffffff")};
  cursor: pointer;
  transition: color 0.3s ease;
  border: none;
`;
