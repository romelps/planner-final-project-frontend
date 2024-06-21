import { useState } from 'react';
// import { rollupVersion } from 'vite';

const TaskForm = (props) => {
    const initialState = {
        title: '',
        date: '',
        blurb: '',
        description: '',
        importance: '',
    }

    const [formData, setFormData] = useState(props.selected ? props.selected : initialState)
    const [checkbox, setCheckbox] = useState(false);


    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
        
        const handleCheck = (e) => { setCheckbox(e.target.checked) }
    };

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
        if (props.selected) {
            props.handleUpdateTask(formData, props.selected._id);
        } else {
            props.handleAddTask(formData);
        }


        //removing what resets the form data
        // setFormData({
        //     title: '',
        //     date: '',
        //     blurb: '',
        //     description: '',
        //     importance: '',
        // })
    }


    
    

    return (
        <div>
            <form onSubmit={() => handleSubmitForm(task)}>
                <div class="row">
                <div class="col-6">
                <label class="form-label" htmlFor="title">Task: </label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    class="form-control"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                </div>
                <br></br>

                <div class="col-6">
                <label class="form-label" htmlFor="date">Date: </label>
                <input 
                    id="date"
                    name="date"
                    type="date"
                    
                    value={formData.date}
                    onChange={handleChange}
                />
                </div>

                <br></br>

                <div class="col-6">
                <label class="form-label" htmlFor="blurb">Blurb: </label>
                <input
                    id="blurb"
                    name="blurb"
                    type="text"
                    class="form-control"
                    value={formData.blurb}
                    onChange={handleChange}
                    required
                />
                </div>

                <br></br>

                <div class="col-6">
                <label class="form-label" htmlFor="description">Description: </label>
                <input
                    id="description"
                    name="description"
                    type="textarea"
                    class="form-control"
                    value={formData.description}
                    onChange={handleChange}
                />
                </div>

                <br></br>

                <div class="col-3">
                <label class="form-label" htmlFor="importance">Urgent? </label>
                <input
                    id="importance"
                    name="importance"
                    type="checkbox"
                    defaltChecked="false"
                    class="form-check-label"
                    value={formData.importance}
                    onChange={handleChange}
                />
                </div>

                <br></br>

                <button type="submit"> {props.selected ? 'Update' : 'Add'} </button>
            </div>
            </form>
        </div>
    );
};

export default TaskForm;