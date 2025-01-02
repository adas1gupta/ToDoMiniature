import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Edit from "./Edit";
import Delete from "./Delete";
import TaskTitle from "./taskTitle";
import TaskDescription from "./taskDescription";

function ToDo({
    taskTitle,
    taskDescription,
    taskIndex,
    handleEdit,
    handleDelete,
    indexToEdit,
    setIndexToEdit,
    updateTask,
}) {
    const elRef = useRef(null);
    const [localTitle, setLocalTitle] = useState(taskTitle);
    const [localDescription, setLocalDescription] = useState(taskDescription);

    if (!elRef.current) {
        elRef.current = document.createElement("div");
    }

    useEffect(() => {
        const modalToDo = document.getElementById("modalToDo");
        modalToDo.appendChild(elRef.current);
        return () => modalToDo.removeChild(elRef.current);
    }, []);

    const handleSave = () => {
        updateTask(taskIndex, localTitle, localDescription);
        setIndexToEdit(null);
    };

    return createPortal(
        indexToEdit === taskIndex ? (
            <div>
                <TaskTitle taskTitle={localTitle} setTaskTitle={setLocalTitle} />
                <TaskDescription
                    taskDescription={localDescription}
                    setTaskDescription={setLocalDescription}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setIndexToEdit(null)}>Cancel</button>
            </div>
        ) : (
            <div className="toDoItem">
                <h2>{taskTitle}</h2>
                <p>{taskDescription}</p>
                <Edit index={taskIndex} handleEdit={handleEdit} />
                <Delete index={taskIndex} handleDelete={handleDelete} />
            </div>
        ),
        elRef.current
    );
}

export default ToDo;
