import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
    }
`
export const StyledInput = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.alto};
`
export const Button = styled.button`
    padding: 10px;
    background: hsl(180, 100%, 25%);
    color: white;
    border: none;
    transition: 0.5s;

    &:hover {
        transform: scale(1.2);
        background-color: rgb(45, 150, 150);
    }
    
    &:active {
        background: hsl(180, 100%, 35%)
    }
`