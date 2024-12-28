import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function ToDo ({children}) {
    const elRef = useRef(null)
    if (!elRef.current) {
        elRef.current = document.createElement("div") //Don't need to put html
        // it matches div to whatever html tag exists
    }

    useEffect(() => {
        const modalToDo = document.getElementById("modalToDo")
        modalToDo.appendChild(elRef.current)
        return (() => modalToDo.removeChild(elRef.current))
    }, [])

    return createPortal(<div>{children}</div>, elRef.current)
}

export default ToDo;