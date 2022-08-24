import styled from "styled-components";


export const ContainerButton = styled.div `
    background-color: #F8F8F8;
    width: 100%;
    margin-top: 15px;
    padding: 15px 10px;
    border-radius: 6px;

    button {
        background-color: transparent;
        padding: 5px 30px;
        font-weight: 500;
        font-size: 20px;
        color: #181C2E;
        border-radius: 6px;
        border: 1px solid #181C2E;
        cursor: pointer;
        transition: 0.3s;

        :hover {
            background-color: #242A45;
            color: #fff;
        }
    }
`
