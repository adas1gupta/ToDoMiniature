function TaskDescription({taskDescription, setTaskDescription}) {
    return (
        <textarea
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Task Description"
        />
    )
}

export default TaskDescription;