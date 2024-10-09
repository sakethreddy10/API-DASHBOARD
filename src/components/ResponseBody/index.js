import React, { useState } from 'react';
import './index.css';

const ResponseBody = ({ responseBody, setResponseBody }) => {
  const [isEditable, setIsEditable] = useState(true);

  const saveResponseBody = () => {
    setIsEditable(false); 
  };

  const editResponseBody = () => {
    setIsEditable(true);
  };

  return (
    <div className="response-body">
      <h4>Response Body</h4>
      <textarea
        value={responseBody}
        onChange={(e) => setResponseBody(e.target.value)}
        disabled={!isEditable} 
        placeholder="Enter response body"
      />
      
      {isEditable ? (
        <button className="save-button" onClick={saveResponseBody}>Save Response Body</button>
      ) : (
        <button className="edit-button" onClick={editResponseBody}>Edit Response Body</button>
      )}
    </div>
  );
};

export default ResponseBody;
