import React from 'react';
import './index.css';

const PriorityDropdown = ({ priority, setPriority }) => {
  return (
    <div className="priority-dropdown">
      <label htmlFor="priority">Priority</label>
      <select
        id="priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default PriorityDropdown;

