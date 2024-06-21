// import './scss/styles.scss'


const TaskList = (props) => {
    const tasks = props.taskList.map((task) => (
        <div class="col-sm-6 card task-item border bg-info">
        <a key={task._id} onClick={() => props.updateSelected(task)}>
            <p class="drag"><h5>{task.title}</h5><br></br>{task.blurb}<button onClick={() => props.handleDeleteTask(props.selected._id)}>Delete</button></p>
        </a>
        </div>
    ));

    return (
        <div class="row task-list p-2 border bg-primary">
            <h1>Tasks</h1>
            {!props.taskList.length ?
                <h2>No tasks yet!</h2>
                : <p>{tasks}</p>
            }
            <button onClick={props.handleTaskFormView}>
                {props.isTaskFormOpen ? 'Close' : 'New Task'}
               
            </button>
        </div>
    )
}

export default TaskList;