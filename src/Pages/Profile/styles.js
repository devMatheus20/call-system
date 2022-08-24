import styled from 'styled-components'


export const ImageProfile = styled.div `
    position: relative;

    input {
        position: absolute;
        top: 40px;
        left: 16px;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        opacity: 0;
        cursor: pointer;
    }

    img {
        width: 250px;
        height: 250px;
        margin: 45px 0 0 15px;
        object-fit: cover;
    }

    svg {
        position: relative;
        bottom: 120px;
        right: 137px;
        opacity: 0.7;
        cursor: pointer;
        transition: 0.5s;

        :hover {
            transform: scale(1.3);
            opacity: 1;
        }
    }
`