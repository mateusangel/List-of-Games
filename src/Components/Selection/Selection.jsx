import { SelectionStyled } from "./SelectionStyled";

export const Selection = () => {
  return (
    <SelectionStyled>
      <label htmlFor="escolha">genre:</label>
      <select name="genre">
        <option value="opcao1">Opção 1</option>
        <option value="opcao2">Opção 2</option>
        <option value="opcao3">Opção 3</option>
      </select>
    </SelectionStyled>
  );
};
