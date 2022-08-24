import styled from 'styled-components'

export const Form = styled.form`
    background-color: #0B0A17;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 600px;
    min-height: 500px;
    padding: 10px;
    border-radius: 0.7rem;


    input {
        background-color: #242A45;
        width: 90%;
        padding: 15px 10px;
        margin-bottom: 17px;
        border-radius: 0.3rem;
        border: none;
        font-size: 15px;
        font-weight: 500;
        color: #fff;
        outline: none;

        ::placeholder {
            color: #fff;
        }
    }

    p {
        font-size: 15px;
        margin-top: 30px;
        color: #fafafa;

        span {
            margin-left: 5px;
            color: #4E68F2;
        }
    }
`
