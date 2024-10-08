import '../styles/styles.css';
import { useState } from 'react';

import { LeftDot, RightDot } from '../components/ConnectDots';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const { label } = data;

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div className="parentCard">
      <LeftDot id={id}></LeftDot>
      <div className="nodeHeading" >
        {label}
      </div>
      <div style={{ marginBottom: '6px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }}>
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
          />
        </label>
        <label style={{ display: 'block' }}>
          Type:
          <select
            value={inputType}
            onChange={handleTypeChange}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <RightDot></RightDot>
    </div>
  );
};
