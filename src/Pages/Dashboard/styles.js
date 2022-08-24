import styled from 'styled-components'



export const InfoCalled = styled.div `
    background-color: #F8F8F8;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 97.5%;
    margin: 15px auto;
    padding: 60px 0;

    span {
        font-size: 17px;
        font-weight: 700;
    }
`

export const Table = styled.table`
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    table-layout: fixed;

    tr {
        background-color: #F8F8F8;
        border: 1.2px solid #ddd;
    }

    th, td {
        text-align: center;
    }

    th {
        font-size: 12px;
        font-weight: 1000;
        letter-spacing: 2px;
        text-transform: uppercase;
        padding: 7px 0;
    }

    td {
        font-size: 14px;
        padding: 10px;
        overflow: hidden;
    }

    .actions {
        display: flex;
        justify-content: center;

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4px;
            border: none;
            border-radius: 5px;
        }

        .search {
            background-color: #3583F6;
            margin-right: 7px;
            cursor: pointer;
            transition: 0.3s;

            :hover {
                transform: scale(1.2);
            }
        }

        .edit {
            background-color: #F6A935;
            cursor: pointer;
            transition: 0.3s;

            :hover {
                transform: scale(1.2);
            }
        }
    }
`

