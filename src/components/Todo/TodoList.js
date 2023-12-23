// TodoList.js
import React from 'react';



const Todo = ({ tasks, completeTask }) => {
    const handleTaskClick = (taskId) => {
      completeTask(taskId);
    };

    return (
        <ul>
          {tasks &&
            tasks.map((task) => (
              <li
                key={task.id}
                onClick={() => handleTaskClick(task.id)}
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}
              >
                {task.text}
              </li>
            ))}
        </ul>
      );
    };
    
    export default Todo;
