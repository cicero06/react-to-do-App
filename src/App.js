// TodoApp.js
import React, { useState, useEffect } from 'react';
import Input from './components/Todo/Input/inputComp';
import Todo from './components/Todo/TodoList';
import Footer from './components/Todo/Footer/footer';
import './App.css';



const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    filterTasks(filter);
  }, [tasks, filter]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const filterTasks = (filterType) => {
    switch (filterType) {
      case 'active':
        setFilteredTasks(tasks.filter((task) => !task.completed));
        break;
      case 'completed':
        setFilteredTasks(tasks.filter((task) => task.completed));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
    setFilter(filterType);
  };

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <Input addTask={addTask} />
      <Todo tasks={filteredTasks} completeTask={completeTask} />
      <Footer filterTasks={filterTasks} activeFilter={filter} />
    </div>
  );
};

export default App;
