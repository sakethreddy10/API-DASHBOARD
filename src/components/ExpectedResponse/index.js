import React from 'react';
import './index.css';

const ExpectedResponse = ({ expectedResponse, setExpectedResponse }) => {
  return (
    <div className="expected-response">
      <h4>Expected Response</h4>
      <textarea
        value={expectedResponse}
        onChange={(e) => setExpectedResponse(e.target.value)}
        placeholder="Enter expected response"
      />
    </div>
  );
};

export default ExpectedResponse;
