const TaskList = (props) => {
    const tasks = props.taskList.map((task) => (
        <a key={task._id} onClick={() => props.updateSelected(task)}>
            <li>{task.name}</li>
        </a>
    ));

    return (
        <div>
            <h1>Tasks</h1>
            {!props.taskList.length ?
                <h2>Not tasks yet!</h2>
                : <ul>{tasks}</ul>
            }
            <button onClick={props.handleTaskFormView}>
                {props.isTaskFormOpen ? 'Close' : 'New Task'}
            </button>
        </div>
    )
}

export default TaskList;