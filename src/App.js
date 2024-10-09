import React, { useState } from 'react';
import TestCaseTitle from './components/TestCaseTitle';
import PriorityDropdown from './components/PriortyDropdown';
import APISequence from './components/APISequence';
import ExpectedResponse from './components/ExpectedResponse';
import ResponseBody from './components/ResponseBody';
import './App.css';

const App = () => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');
  const [expectedResponse, setExpectedResponse] = useState('');
  const [responseBody, setResponseBody] = useState('');

  return (
    <div className="app">
      <h1>API Test Case Dashboard</h1>
      <TestCaseTitle title={title} setTitle={setTitle} />
      <PriorityDropdown priority={priority} setPriority={setPriority} />
      <APISequence />
      <ExpectedResponse expectedResponse={expectedResponse} setExpectedResponse={setExpectedResponse} />
      <ResponseBody responseBody={responseBody} setResponseBody={setResponseBody} />
    </div>
  );
};

export default App;
