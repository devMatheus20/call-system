import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background-color: hsl(0, 0%, 94%);
    }

    .flex {
        display: flex;

        @media screen and (max-width: 900px) {
            flex-direction: column;
        }
    }

    .margin {
        margin: 25px 0 10px 0;
    }

    .textCaptalize {
        text-transform: capitalize;
    }

    .disabled {
        cursor: not-allowed;
    }

    //Fundo da tela de login/register
    .mainContainer {
        background-color: #080713;
        display: grid;
        place-items: center;
        height: 100vh;
    }

    // Badge do Status do chamado
    .badge {
        border-radius: 3px;
        color: #fff;
        padding: 3px;
    }

    //Botão "Novo Chamado"
    .new-call {
        background-color: #83bf02;
        display: flex;
        align-items: center;
        max-width: 150px;
        margin-bottom: 15px;
        padding: 8px;
        border: none;
        border-radius: 0.3rem;
        color: #fff;
        cursor: pointer;
        font-weight: 500;
        float: right;

        :hover {
            filter: brightness(1.1)
        }
    }
`

export default GlobalStyles