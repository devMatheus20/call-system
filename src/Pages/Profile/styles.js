import styled from 'styled-components'


export const ImageProfile = styled.div `
    position: relative;

    input {
        position: absolute;
        top: 40px;
        left: 16px;
        width: 245px;
        height: 245px;
        border-radius: 50%;
        opacity: 0;
        cursor: pointer;
        z-index: 1000;
    }

    img {
        background: none;
        width: 245px;
        height: 245px;
        margin: 30px 0 0 15px;
        border-radius: 50%;
        object-fit: cover;
    }

    svg {
        position: relative;
        bottom: 120px;
        right: 134px;
        opacity: 0.7;
        cursor: pointer;
        transition: 0.5s;

        :hover {
            transform: scale(1.3);
            opacity: 1;
        }
    }
`