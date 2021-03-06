import React from 'react';
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import Button from "./Button";


function Tasks() {
    return (
        <Container>
            <Header title="Lista zadań" />
            <Section
                title="Dodaj nowe zadanie"
                extraHeaderContent={<Button />}
                body={<Form/>}
            />
            < Section
                title="Lista zadań"
                extraHeaderContent={<Buttons />}
                body={<TaskList />}
            />
        </Container>
    );
};

export default Tasks;