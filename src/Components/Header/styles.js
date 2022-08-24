import styled from 'styled-components'
import cover from '../../Assets/fundoHeader.png'


export const SideBar = styled.header`
    background-color: #181C2E;
    max-width: 200px; 
    min-width: 200px;
    min-height: 100vh;

    @media(max-width: 700px) {
        min-height: auto;
        width: 100%;
    }
`

export const ImageUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${cover});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
 
    img {
        width: 90px;
        padding: 30px 0;
        filter: drop-shadow(2px 3px 6px #121212);
        border-radius: 50%;
    }

    @media(max-width: 700px) {
        display: none;
    }

`
export const Links = styled.div`
    display: flex;
    flex-direction: column;

    a {
        display: flex;
        align-items: center;
        gap: 7px;
        padding: 15px;
        font-size: 14px;
        color: #ccc;
        text-decoration: none;
        transition: 0.5s ease;

        :hover {
            background-color: #000;
        }

        svg {

            @media(max-width: 700px) {
                display: none;
            }

        }
    }

    @media(max-width: 700px) {
        flex-direction: row;
    }
`


