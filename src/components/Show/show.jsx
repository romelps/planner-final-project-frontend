const Show = (props) => {

    if(!props.selected) {
        return (
            <div>
                <h1></h1>
            </div>
        )
    }

    return (
        <div class="show-page card bg-dark text-light">
            <h3>{props.selected.title}</h3>
            <h4>{props.selected.date}</h4>
            <p>{props.selected.description}</p>
            <button onClick={() => props.handleTaskFormView(props.selected)}>Edit</button>
            <button onClick={() => props.handleDeleteTask(props.selected._id)}>Delete</button>
        </div>
    )
}

export default Show;