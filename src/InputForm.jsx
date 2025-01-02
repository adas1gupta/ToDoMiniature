import TaskDescription from "./taskDescription";
import TaskTitle from "./taskTitle";

function InputForm({ taskTitle, taskDescription, setTaskTitle, setTaskDescription, handleAdd }) {
    return (
        <div className="inputForm">
            <TaskTitle setTaskTitle={setTaskTitle} taskTitle={taskTitle} className="taskTitle"/>
            <TaskDescription setTaskDescription={setTaskDescription} taskDescription={taskDescription} className="taskDescription"/>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default InputForm;