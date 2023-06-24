import Logo from "../../assets/Logo.svg";
import { BiSearchAlt } from "react-icons/bi";
import { HeaderStyled, LogoStyled } from "./HeaderStyle";
export function Header() {
  return (
    <HeaderStyled>
      <LogoStyled>
        <img src={Logo} alt="Logo" />
        <h1>List of Games</h1>
      </LogoStyled>
      <div className="Input">
        <input type="text" placeholder="Digite o Nome do Filme" />
        <BiSearchAlt className="icon" />
      </div>
    </HeaderStyled>
  );
}
