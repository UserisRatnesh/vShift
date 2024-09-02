import '../styles/styles.css';
import { useState } from 'react';

import { LeftDot, RightDot } from '../components/ConnectDots';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

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
        Input
      </div>
      <div style={{ marginBottom: '6px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }}>
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            style={{
              width: '93.5%',
              padding: '6px',
              borderRadius: '4px',
              border: '1px solid #CCC',
              marginTop: '4px',
            }}
          />
        </label>
        <label style={{ display: 'block' }}>
          Type:
          <select
            value={inputType}
            onChange={handleTypeChange}
            style={{
              width: '100%',
              padding: '6px',
              borderRadius: '4px',
              border: '1px solid #CCC',
              marginTop: '4px',
            }}
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
