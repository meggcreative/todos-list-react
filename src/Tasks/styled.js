import styled, { css } from "styled-components";

export const List = styled.ul`
    padding: 10px;
    margin: 2px 0;
    background-color: ${({ theme }) => theme.color.white};
    max-width: auto;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: 35px 1fr 35px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.color.silver};
    margin-bottom: 10px;
    padding: 10px 10px 10px 10px;

    ${({ hidden }) => hidden && css`
        display:none;
    `}
`;

export const Content = styled.span`
    justify-content: center;
    overflow-wrap: anywhere;
    margin: 10px;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    margin: 10px 0;
    padding: 5px;
    font-size: 25px;
    height: 38px;
    border: none;
    color: white;
    transition: background 0.3s;
    display: flex;
    justify-content: center;

    ${({ toggleDone }) => toggleDone && css`
        transition: 1s;
        background-color: green;
        grid-column: 1;
    

        &:hover {
            background-color: rgb(9, 145, 9);
            transform: scale (1.5);
        }
    `}    

    ${({ remove }) => remove && css`
        transition: 1s;
        background-color: red;
        grid-column: 3;
        justify-content: center;

        &:hover {
            background-color: rgb(172, 46, 46);
            transform: scale (1.5);
        }
    `}

`

