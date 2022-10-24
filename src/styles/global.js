import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        background: radial-gradient(circle, rgba(68,62,172,1) 0%, rgba(129,129,215,1) 0%, rgba(68,77,167,1) 100%);
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }
    html, body, #root {
        width: 100vw;
        height: 100vh;
    }
`;
