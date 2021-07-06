import styled, {css} from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const StyledButton = styled.button`
    border: none;
    background-color: ${({theme})=>theme.color.white};
    color: teal;
    padding: 10px;
    transition: color 0.5s;
    margin: 0 0 0 20px;

    @media(max-width: ${({theme})=>theme.breakpoint.mobile}px) {
        flex-basis: 100%;
        margin: 10px;
    }

    ${({disabled}) => disabled && css`
        color: grey;
    `}

`