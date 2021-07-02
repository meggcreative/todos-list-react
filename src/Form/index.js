import React, { useState, useRef } from 'react';
import {StyledForm, StyledInput, Button} from "./styled.js";

const Form = ({ addNewTask }) => {

    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        }

        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm
            className="form"
            onSubmit={onFormSubmit}
        >
            <StyledInput
                ref={inputRef}
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