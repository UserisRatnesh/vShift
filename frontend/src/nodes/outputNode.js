// outputNode.js

import { useState } from 'react';
import '../styles/styles.css';

import { LeftDot } from '../components/ConnectDots';



export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <div className="parentCard" >
      <LeftDot></LeftDot>
      <div className="nodeHeading" >
        Output
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
        <label>
          Type:
          <select value={outputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </div>
  );
}
