// TodoFooter.js
import React from 'react';
import './footer.css'

const Footer = ({ filterTasks, activeFilter }) => {
  return (
    <div>
      <button onClick={() => filterTasks('all')} className={activeFilter === 'all' ? 'active' : ''}>All</button>
      <button onClick={() => filterTasks('active')} className={activeFilter === 'active' ? 'active' : ''}>Active</button>
      <button onClick={() => filterTasks('completed')} className={activeFilter === 'completed' ? 'active' : ''}>Completed</button>
    </div>
  );
};

export default Footer;
