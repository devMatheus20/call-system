import styled from 'styled-components'



export const ContainerModal = styled.section`
    background: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`

export const Modal = styled.article`
    background-color: #fff;
    height: 270px;
    width: 600px;
    padding: 20px;
    margin-top: 120px;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    box-shadow: 0 0 20px rgba(0,0,0,.8);
    position: relative;

    h2 {
        font-size: 26px;
        padding-bottom: 5px;
        border-bottom: 1px solid #181C2E;
    }

    button {
        background-color: #f65835;
        display: flex;
        align-items: center;
        padding: 4px 15px;
        position: absolute;
        top: 10px;
        right: -55px;
        border: 0;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;

        :hover {
            filter: brightness(1.5);
        }

        svg {
            margin-right: 5px;
        }
    }
    
`

export const ListModal = styled.ul`
    max-height: 150px;
    margin: 20px 0 0 10px;

    .col-1 {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        max-height: 100px;
        list-style: none;

        li {
            display: flex;
            align-items: center;
            margin: 10px 0;
            overflow: hidden;
            max-width: 250px;
        }

        p {
            font-weight: 900;
        }

        span {
            margin-left: 7px;
            font-style: italic;
            letter-spacing: 0.5px;
        }
    }

    .col-2 {
        display: flex;
        align-items: center;
        margin-top: 5px;

        li {
            display: flex;
            flex-direction: column;
        }

        p {
            font-weight: 900;
        }

        span {
            margin-top: 5px;
            font-style: italic;
            font-size: 15px;
            letter-spacing: 0.5px;
            max-width: 400px;
            overflow: hidden;
        }
    }
`
