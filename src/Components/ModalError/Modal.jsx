import { useState } from "react";
import { BiSolidErrorAlt } from "react-icons/bi";
import { BsXSquareFill } from "react-icons/bs";
import { ModalStyled } from "./ModalStyled";

// eslint-disable-next-line react/prop-types
export const Modal = ({ children }) => {
  const [isopen, setIsopen] = useState(true);

  const closeModal = () => {
    setIsopen(false);
  };

  return isopen ? (
    <ModalStyled>
      <BsXSquareFill className="iconBy" color="black" onClick={closeModal} />
      <h1>{children}</h1>
      <BiSolidErrorAlt className="iconErr" color="red" />
    </ModalStyled>
  ) : null;
};
