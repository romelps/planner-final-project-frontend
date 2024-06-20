import { useState, useEffect } from 'react';
import * as taskService from './services/taskService';

import TaskList from './components/TaskList/TaskList';
import Show from './components/Show/show';

import './App.css'
import TaskForm from './components/Create/create';

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        //call on index functon
        const tasks = await taskService.index();
        if (tasks.error) {
          throw new Error(tasks.error);
        }
        setTaskList(tasks);
      } catch (error) {
        console.log(error)
      }
    };

    fetchTasks();

  }, []);

  const updateSelected = (task) => {
    setSelected(task)
  }

  const handleTaskFormView = () => {
    setIsTaskFormOpen(!isTaskFormOpen);
  }

  return (
    <>
      <TaskList
        taskList={taskList} 
        updateSelected={updateSelected}
        handleTaskFormView={handleTaskFormView}
        isTaskFormOpen={isTaskFormOpen}
      />
      {isTaskFormOpen ? (
        <TaskForm />
      ) : (
        <Show 
          selected={selected}
        />
      )}
    </>
  )
};

export default App;
