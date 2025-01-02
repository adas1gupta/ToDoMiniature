import TaskDescription from "./taskDescription";
import TaskTitle from "./taskTitle";

function InputForm({ taskTitle, taskDescription, setTaskTitle, setTaskDescription, handleAdd }) {
    return (
        <div id="add">
            <TaskTitle setTaskTitle={setTaskTitle} taskTitle={taskTitle} />
            <TaskDescription setTaskDescription={setTaskDescription} taskDescription={taskDescription}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default InputForm;