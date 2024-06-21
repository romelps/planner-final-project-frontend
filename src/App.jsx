import { useState, useEffect } from 'react';
import * as taskService from './services/taskService';

import TaskList from './components/TaskList/TaskList';
import Show from './components/Show/show';

import './App.css'
import TaskForm from './components/Create/create';

const App = () => {
  const [task, setTask] = useState({})
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

  const handleAddTask = async (formData) => {
    try {
      const newTask = await taskService.create(formData);
      setTaskList([newTask, ...taskList]);
      setIsTaskFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  const updateSelected = (task) => {
    setSelected(task)
  }

  const handleTaskFormView = () => {
    if (!task.title) setSelected(null);
    setIsTaskFormOpen(!isTaskFormOpen);
  }

  const handleUpdateTask = async (formData, taskId) => {
    try {
      const updatedTask = await taskService.update(formData, taskId);
      
      //handle errors
      if (updatedTask.error) {
        throw new Error(updatedTask.error);
      }

      const updatedTaskList = taskList.map((task) => 
        task._id !== updatedTask._id ? task : updatedTask
      );

      setTaskList(updatedTaskList);

      //change selected otherwise old data pops up
      setSelected(updatedTask);
      setIsTaskFormOpen(false);

    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const deletedTask = await taskService.deleteTask(taskId);
      if (deletedTask.error) {
        throw new Error(deletedTask.error);
      }
      setTaskList(taskList.filter((task) => task._id !== deletedTask._id));
      setSelected(null);
      setIsTaskFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      
      <TaskList
        task={task}
        selected={selected}
        taskList={taskList} 
        updateSelected={updateSelected}
        handleTaskFormView={handleTaskFormView}
        isTaskFormOpen={isTaskFormOpen}
        handleDeleteTask={handleDeleteTask}
      />
      
      {isTaskFormOpen ? (
        <TaskForm 
          task={task}
          selected={selected}
          handleAddTask={handleAddTask}
          handleUpdateTask={handleUpdateTask} 

        />
      ) : 
       <Show 
          selected={selected}
          task={task}
          handleTaskFormView={handleTaskFormView}
          handleDeleteTask={handleDeleteTask}
        />
      }
    </>
  )
};

export default App;
