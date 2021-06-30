import {StyledSection, StyledHeader, StyledTittle, StyledSectionContent} from "./styled.js";


const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <StyledHeader>
            <StyledTittle> {title} </StyledTittle>
            {extraHeaderContent}
        </StyledHeader>
        <StyledSectionContent>
            {body}
        </StyledSectionContent>
    </StyledSection>

);

export default Section;