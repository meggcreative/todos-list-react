import React, { useState } from 'react';
import {StyledForm, StyledInput, Button} from "./styled.js";

const Form = ({ addNewTask }) => {

    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        }

        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }

    return (
        <StyledForm
            className="form"
            onSubmit={onFormSubmit}
        >
            <StyledInput
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                required
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button id="myTestButton">Dodaj zadanie </Button>
        </StyledForm>
    )

}



export default Form;