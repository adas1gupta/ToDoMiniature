import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import { useState } from "react";
import ToDo from "./ToDo";
import ToDoList from "./ToDoList";
import InputForm from "./InputForm";

const App = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [tasks, setTasks] = useState([]);

    //function to add Tasks
    const handleAdd = () => {
        if (taskTitle && taskDescription) {
            setTasks([...tasks, {taskTitle: taskTitle, taskDescription: taskDescription}])
            setTaskTitle("")
            setTaskDescription("")
        }
    }

    return (
        <div>
            <h1>To Do</h1>
            <InputForm
                taskTitle={taskTitle}
                taskDescription={taskDescription}
                setTaskTitle={setTaskTitle}
                setTaskDescription={setTaskDescription}
                handleAdd={handleAdd}
            />

            <ToDoList>
                {(tasks.length > 0) ? (
                    tasks.map((task, index) => (
                            <ToDo key={index} taskTitle={task.taskTitle} taskDescription={task.taskDescription} />
                        ))
                    ) : <></>
                }
            </ToDoList>
        </div>
    )
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(<App />)
