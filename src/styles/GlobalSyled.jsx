import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

    html{
        font-size:62.5%;
    }
    

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 1.6rem;
    
    }

    body{
        background: ${(Themes) => Themes.theme.colors.tertiary};
        height: 100vh;
        font-family: ${(Themes) => Themes.theme.fonts.primary};
    }

`;
