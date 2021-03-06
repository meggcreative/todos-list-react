import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 10px 0;
    background: white;
    box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
`;

export const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};

    @media (max-width:${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
    }
`
export const StyledTittle = styled.h2`
    font-size: 20px;
    margin: 0;
`

export const StyledSectionContent = styled.div`
    padding: 20px;
`