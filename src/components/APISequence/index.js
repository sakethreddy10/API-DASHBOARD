import React, { useState } from 'react';
import './index.css';

const APISequence = () => {
  const [apiList, setApiList] = useState([
    { api: '', collectionCondition: '', discountAmount: 0 }
  ]);
  const [isEditable, setIsEditable] = useState(true);

  const addApiField = () => {
    setApiList([...apiList, { api: '', collectionCondition: '', discountAmount: 0 }]);
  };

  const handleChange = (index, field, value) => {
    const newApiList = [...apiList];
    newApiList[index][field] = value;
    setApiList(newApiList);
  };

  const saveAPISequence = () => {
    setIsEditable(false);
  };

  const editAPISequence = () => {
    setIsEditable(true);
  };

  return (
    <div className="api-sequence">
      <h4>API Sequence</h4>
      {apiList.map((apiItem, index) => (
        <div key={index} className="api-field">
          <input
            type="text"
            placeholder="API name"
            value={apiItem.api}
            onChange={(e) => handleChange(index, 'api', e.target.value)}
            disabled={!isEditable} 
          />
          <input
            type="text"
            placeholder="Collection Condition"
            value={apiItem.collectionCondition}
            onChange={(e) => handleChange(index, 'collectionCondition', e.target.value)}
            disabled={!isEditable}
          />
          <input
            type="number"
            placeholder="Discount Amount"
            value={apiItem.discountAmount}
            onChange={(e) => handleChange(index, 'discountAmount', e.target.value)}
            disabled={!isEditable}
          />
        </div>
      ))}
      <button className="add-button" onClick={addApiField} disabled={!isEditable}>Add API</button>
      
      {isEditable ? (
        <button className="save-button" onClick={saveAPISequence}>Save API Sequence</button>
      ) : (
        <button className="edit-button" onClick={editAPISequence}>Edit API Sequence</button>
      )}
    </div>
  );
};

export default APISequence;
