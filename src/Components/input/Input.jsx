import { useState, useEffect } from "react";
import { InputContainer, InputField, ToggleButton } from "./InputStyled";

// eslint-disable-next-line react/prop-types
export const Input = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleInput = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    const text = event.target.value;
    onChange(text);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth <= 498);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <InputContainer>
      <InputField type="text" isOpen={isOpen} onChange={handleInputChange} />
      <ToggleButton isOpen={isOpen} onClick={toggleInput} />
    </InputContainer>
  );
};
