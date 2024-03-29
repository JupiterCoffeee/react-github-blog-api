import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['blue-300']};
    }
 }

 body {
    background-color: ${props => props.theme['dark-blue-800']};
    color: ${props => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
    line-height: 1.6;
 }

 a {
    color: ${props => props.theme['blue-300']};
    font-weight: 700;
    cursor: pointer;

        &:hover {
            text-decoration: underline;
            transition: text-decoration 200ms;
        }
    }
`;