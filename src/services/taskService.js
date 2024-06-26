const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tasks`;


const index = async () => {
    try {
        const res = await fetch(BASE_URL);
        return res.json();
    } catch (err) {
        console.log(err);  
    }
};


const deleteTask = async (taskId) => {
    try {
        const deletedTask = await fetch(`${BASE_URL}/${taskId}`, {
            method: 'DELETE',
        });
        return deletedTask.json();
    } catch (error) {
        console.log(error);
    }
}

const create = async (formData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        return res.json();
    } catch (err) {
        console.log(err)
    }
}

const update = async (formData, taskId) => {
    try {
        const res = await fetch(`${BASE_URL}/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
}


export { index, create, update, deleteTask }