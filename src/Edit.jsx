function Edit(index, taskTitle, taskDescription, handleEdit) {
    return (
        <button onClick={ () => handleEdit(index, taskTitle, taskDescription) }>Edit</button>
    )
}

export default Edit;