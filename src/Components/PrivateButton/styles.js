import styled from 'styled-components'


export const Button = styled.button`
    background-color: #181C2E;
    width: 46%;
    margin-top: 30px;
    padding: 8px 0;
    color: #fff;
    border-radius: 0.3rem;
    border: none;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;

    :hover {
        filter: brightness(1.5);
    }

    :active {
        opacity: 0.7;
    }
`