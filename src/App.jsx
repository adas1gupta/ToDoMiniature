import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import ToDo from "./ToDo";
import ToDoList from "./ToDoList";
import InputForm from "./InputForm";


const App = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [tasks, setTasks] = useState([]);
    const [indexToEdit, setIndexToEdit] = useState(null)

    //function to add Tasks
    const handleAdd = () => {
        if (taskTitle && taskDescription) {
            setTasks([...tasks, {taskTitle: taskTitle, taskDescription: taskDescription}])
            setTaskTitle("")
            setTaskDescription("")
        }
    }

    const handleEdit = (index) => {
        setIndexToEdit(index);
    };

    const handleEditComplete = () => {
        setIndexToEdit(null);
    };

    const handleDelete = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const updateTask = (index, updatedTitle, updatedDescription) => {
        setTasks((prevTasks) =>
            prevTasks.map((task, i) =>
                i === index ? { taskTitle: updatedTitle, taskDescription: updatedDescription } : task
            )
        );
    };


    return (
        <div>
            <h1 className="title">To Do</h1>
            <InputForm
                taskTitle={taskTitle}
                taskDescription={taskDescription}
                setTaskTitle={setTaskTitle}
                setTaskDescription={setTaskDescription}
                handleAdd={handleAdd}
            />

            <ToDoList className="toDoList">
                {(tasks.length > 0) ? (
                    tasks.map((task, index) => (
                        <ToDo
                            key={index} //this is so React can uniquely identify each item in a list
                            //key is also not accessible within child components
                            taskIndex={index}
                            taskTitle={task.taskTitle}
                            taskDescription={task.taskDescription}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                            indexToEdit={indexToEdit}
                            setIndexToEdit={setIndexToEdit}
                            updateTask={updateTask}
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
