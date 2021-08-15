import styled from "styled-components";

export default styled.button`
    border: none;
    background-color: ${({ theme }) => theme.color.white};
    color: teal;
    padding: 10px;
    transition: color 0.5s;
    margin: 0 0 0 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-basis: 100%;
    margin: 10px;
    }

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({theme}) => theme.color.silver};
    }
`
