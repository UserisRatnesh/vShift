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
      <div>
        <label>
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
        <label>
          Type:
          <select value={outputType} onChange={handleTypeChange}
            style={{
              width: '100%',
              padding: '6px',
              borderRadius: '4px',
              border: '1px solid #CCC',
              marginTop: '4px',
            }}>
            <option value="Text">Text</option>
            <option value="File">Image</option>

          </select>
        </label>
      </div>
    </div >
  );
}
