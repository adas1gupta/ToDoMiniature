function Delete ({index, handleDelete}) {
    return (
        <button onClick={ () => handleDelete(index) }>Delete</button>
    )
}

export default Delete;