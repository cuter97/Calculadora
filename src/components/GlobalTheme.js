import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    body{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        background-color:${props => props.theme.bg};
        font-family: 'Spartan', sans-serif;
    }
`;