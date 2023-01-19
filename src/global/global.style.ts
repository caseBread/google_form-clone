import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,body {
        margin:0;
        padding:0;
        font-size:16px;
    }
    
    body {
        background-color: #f3f3f3;
    }
`;

export default GlobalStyle;
