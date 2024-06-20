const Show = (props) => {
    if(!props.selected) {
        return (
            <div>
                <h1>NO DETAILS</h1>
            </div>
        )
    }

    return (
        <div>
            <h1>{props.selected.title}</h1>
            <h4>{props.selected.date}</h4>
            <p>{props.selected.description}</p>
        </div>
    )
}

export default Show;