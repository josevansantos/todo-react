import React from 'react';

import './Task.css';

const Task = ({ task, handleTaskClick }) => {
  return (
    <div>
      <div
        className="task-container"
        style={
          task.completed
            ? {
                borderLeft: '6px solid aquamarine',
                textDecoration: 'line-through',
              }
            : {}
        }
      >
        <div className="task-title" onClick={() => handleTaskClick(task.id)}>
          {task.title}
        </div>
      </div>
    </div>
  );
};

export default Task;
