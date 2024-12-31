import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Edit from "./Edit";
import Delete from "./Delete";

function ToDo ({ taskTitle, taskDescription, taskIndex, handleEdit, handleDelete }) {
    const elRef = useRef(null)
    if (!elRef.current) {
        elRef.current = document.createElement("div") //Don't need to put html (<div>)
        // it matches div to whatever html tag exists
    }

    useEffect(() => {
        const modalToDo = document.getElementById("modalToDo")
        modalToDo.appendChild(elRef.current)
        return () => modalToDo.removeChild(elRef.current)
    }, [])

    return createPortal(
        (<div>
            <h2>{taskTitle}</h2>
            <p>{taskDescription}</p>
            <Edit 
                index={taskIndex}
                taskTitle={taskTitle}
                taskDescription={taskDescription}
                handleEdit={handleEdit}
            />
            <Delete 
                index={taskIndex}
                taskTitle={taskTitle}
                taskDescription={taskDescription}
                handleDelete={handleDelete}
            />
        </div>), elRef.current
    )
}

export default ToDo;