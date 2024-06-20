import { useState } from 'react';

const TaskForm = (props) => {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        blurb: '',
        description: '',
        importance: '',
    })

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    };

    return (
        <div>
            <form>
                <label htmlfor="title">Task: </label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />

                <br></br>

                <label htmlFor="date">Date: </label>
                <input 
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                />

                <br></br>

                <label htmlFor="blurb">Blurb: </label>
                <input
                    id="blurb"
                    name="blurb"
                    type="text"
                    value={formData.blurb}
                    onChange={handleChange}
                />

                <br></br>

                <label htmlFor="description">Description: </label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    value={formData.description}
                    onChange={handleChange}
                />

                <br></br>

                <label htmlFor="importance">Urgent? </label>
                <input
                    id="importance"
                    name="importance"
                    type="checkbox"
                    value={formData.importance}
                    onChange={handleChange}
                />

                <br></br>

                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default TaskForm;