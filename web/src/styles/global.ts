import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: color 0.1s ease-in;
        transition: all 0.2s ease-in;
    }

    body {
        background: ${props => props.theme.title === 'dark' ? props.theme.colors.primary : props.theme.colors.background};
        font-size: 14px;
        color: ${props => props.theme.colors.text};
        font-family: sans-serif;
    }
`;