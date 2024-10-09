import React from 'react';
import './index.css';

const TestCaseTitle = ({ title, setTitle }) => {
  return (
    <div className="test-case-title">
      <label htmlFor="testTitle">Test Case Title</label>
      <input
        type="text"
        id="testTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter test case title"
      />
    </div>
  );
};

export default TestCaseTitle;
