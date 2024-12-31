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

    const handleEdit = (index, taskTitle, taskDescription) => {
        setTasks(tasks.map((task, i) =>
            i === index
                ? { ...task, taskTitle, taskDescription }
                : task
        ));
    };

    const handleDelete = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

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
                            <ToDo
                                key={index} //this is so React can uniquely identify each item in a list
                                //key is also not accessible within child components
                                taskIndex={index} //separate index identifier
                                taskTitle={task.taskTitle}
                                taskDescription={task.taskDescription}
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            />
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
