function InputForm({ taskTitle, taskDescription, setTaskTitle, setTaskDescription, handleAdd }) {
    return (
        <div id="add">
            <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Task Title"
            />
            <input
                type="text"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Task Description"
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default InputForm;