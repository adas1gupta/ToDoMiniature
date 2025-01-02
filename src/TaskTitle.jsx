function TaskTitle({taskTitle, setTaskTitle}){
    return (
        <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Task Title"
        />
    )
}

export default TaskTitle