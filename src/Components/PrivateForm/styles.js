import styled from 'styled-components'


export const Form = styled.form`
    background-color: #F8F8F8;
    display: flex;
    flex-direction: column;
    min-width: 100%;
    padding-left: 11px;
    padding-bottom: 20px;
    border-radius: 6px;
    
    input[type=text] {
        display: block;
        width: 595px;
        padding: 9px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 0.3rem;
        outline: none;

        @media screen and (max-width: 700px) {
            width: 90%;
        }
    }

    select {
        display: block;
        width: 595px;
        padding: 9px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 0.3rem;
        outline: none;

        @media screen and (max-width: 700px) {
            width: 90%;
        }
    }

    textarea {
        display: block;
        height: 120px;
        width: 595px;
        padding: 9px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 0.3rem;
        outline: none;
        resize: none;

        @media screen and (max-width: 700px) {
            width: 90%;
        }
    }
`

