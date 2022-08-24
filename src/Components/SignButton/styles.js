import styled from 'styled-components'

export const Button = styled.button`
    background-color: #181C2E;
    display: block;
    max-height: 100px;
    height: 50px;
    width: 90%;
    margin-top: 20px;
    border: none;
    border-radius: 0.3rem;
    font-size: 17px;
    font-weight: 400;
    color: #fff;
    outline: none;
    cursor: pointer;

    :hover {
        filter: brightness(1.5);
    }

    :active {
        opacity: 0.7;
    }
`