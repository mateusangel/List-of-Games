import { FooterStyled } from "./FooterStyled";
import Logo from "../../assets/Logo.svg";

export const Footer = () => {
  return (
    <FooterStyled>
      <img src={Logo} alt="Logo" />
      @list of Games
    </FooterStyled>
  );
};
