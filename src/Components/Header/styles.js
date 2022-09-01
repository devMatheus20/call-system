import styled from 'styled-components'
import cover from '../../Assets/fundoHeader.png'


export const SideBar = styled.header`
    background-color: #181C2E;
    max-width: 200px; 
    min-width: 200px;
    min-height: 100vh;

    @media screen and (max-width: 900px) {
        min-height: auto;
        max-width: none; 
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
    height: 150px;

    @media screen and (max-width: 900px) {
        display: none;
    }
 
    img {
        width: 90px;
        height: 90px;
        filter: drop-shadow(2px 3px 6px #121212);
        border-radius: 50%;
        object-fit: cover;
    }

`
export const Links = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 900px) {
        flex-direction: row;
    }

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
            color: #fff;
        }

        @media screen and (max-width: 900px) {
            :hover {
                background-color: transparent;
                color: #fff;
            }
        }

        svg {

            @media screen and (max-width: 900px) {
                display: none;
            }

        }
    }
`


