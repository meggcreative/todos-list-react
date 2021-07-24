import { StyledContainer, StyledButton } from "./styled.js";
import { useSelector, useDispatch} from "react-redux";
import {selectTasks, toggleHideDone} from "../tasksSlice";


const Buttons = ({ setAllDone }) => {

    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch(); 
    
    if (tasks.length === 0) {
        return null
    }
    
    return (
        <StyledContainer>
            <StyledButton onClick={() => dispatch(toggleHideDone())}>
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