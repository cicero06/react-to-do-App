import React, { useState } from 'react';

const Input = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div>
      <input type="text" value={task} onChange={handleInputChange} placeholder="Add a task" />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default Input;
