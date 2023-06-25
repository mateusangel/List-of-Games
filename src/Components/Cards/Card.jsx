import { CardStyled } from "./CardStyled";

// eslint-disable-next-line react/prop-types
export const Card = ({ children, onClick }) => {
  return (
    <CardStyled onClick={onClick}>
      <div>{children}</div>
    </CardStyled>
  );
};
