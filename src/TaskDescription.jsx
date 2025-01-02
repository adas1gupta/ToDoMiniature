function TaskDescription({taskDescription, setTaskDescription}) {
    return (
        <input
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Task Description"
        />
    )
}

export default TaskDescription;