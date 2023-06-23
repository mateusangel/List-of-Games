import { CardStyled } from "./CardStyled";
// eslint-disable-next-line react/prop-types
export const Card = ({ children }) => {
  return (
    <CardStyled>
      <div>{children}</div>
    </CardStyled>
  );
};
