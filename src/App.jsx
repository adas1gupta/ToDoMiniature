import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import ToDo from "./ToDo";
import ToDoList from "./ToDoList";
import { useState } from "react";

const App = () => {
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")

    return (
        <div>
            Help
            <ToDoList>
            {(taskTitle && taskDescription) ? (
                <ToDo>
                    <h2>{taskTitle}</h2>
                    <p>{taskDescription}</p>
                </ToDo>
            ) : <></>}
            </ToDoList>
        </div>
        
    )
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(<App />)
