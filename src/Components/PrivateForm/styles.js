import styled from 'styled-components'


export const Form = styled.form`
    background-color: #F8F8F8;
    display: flex;
    flex-direction: column;
    min-width: 100%;
    padding-left: 11px;
    padding-bottom: 20px;
    border-radius: 6px;

    input {
        display: block;
        width: 46%;
        padding: 9px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 0.3rem;
        outline: none;
    }

    select {
        display: block;
        width: 46%;
        padding: 9px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 0.3rem;
        outline: none;
    }

    textarea {
        display: block;
        height: 120px;
        width: 46%;
        padding: 9px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 0.3rem;
        outline: none;
        resize: none;
    }
`

