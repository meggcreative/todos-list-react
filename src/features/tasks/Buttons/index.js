import { StyledContainer, StyledButton } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  toggleHideDone,
  setAllDone,
  fetchExampleTasks,
} from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  if (tasks.length === 0) {
    return (
      <StyledButton onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </StyledButton>
    );
  }

  return (
    <StyledContainer>
      <StyledButton onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </StyledButton>
      <StyledButton onClick={() => dispatch(toggleHideDone())}>
        {hideDone ? "Pokaz" : "Ukryj"} ukończone
      </StyledButton>
      <StyledButton
        onClick={() => dispatch(setAllDone())}
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </StyledButton>
    </StyledContainer>
  );
};

export default Buttons;
