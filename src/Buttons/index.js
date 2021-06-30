import { StyledContainer, StyledButton } from "./styled.js";


const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
    if (tasks.length === 0) {
        return null
    }
    return (
        <StyledContainer>
            <StyledButton onClick={toggleHideDone}>
                {hideDone ? "Pokaz" : "Ukryj"} ukończone
            </StyledButton>
            <StyledButton
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </StyledButton>
        </StyledContainer>
    )
}


export default Buttons;