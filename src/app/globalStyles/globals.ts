import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: font-family: Roboto,Helvetica,Arial,sans-serif;
    }
    #root{
        margin:0 auto;
    }
 `;

export default GlobalStyle;
