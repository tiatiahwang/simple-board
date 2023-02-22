import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    input {
        all: unset;
    }
    * {
        box-sizing: border-box;
    }
    body {
        background-color: #fff;
        font-size: 14px;
        font-family: 'Open Sans', sans-serif;
        color: #222;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyles;
