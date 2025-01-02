function Edit({index, taskTitle, taskDescription, handleEdit}) {
    return (
        <button onClick={ () => handleEdit(index) }>Edit</button>
    )
}

export default Edit;