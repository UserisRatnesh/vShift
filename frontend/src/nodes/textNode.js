
import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import { RightDot } from '../components/ConnectDots';

import '../styles/styles.css';


export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || 'text_input');
  const [handles, setHandles] = useState([]);
  const inputRef = useRef(null);

  const { label } = data;

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };


  useEffect(() => {
    // Extract variables surrounded by double curly brackets
    const variableRegex = /\{\{\s*(\w+)\s*\}\}/g;
    const variables = [];
    let match;

    while ((match = variableRegex.exec(currText)) !== null) {
      variables.push(match[1]); // match[1] contains the variable name
    }

    // Create handles based on extracted variables
    setHandles(variables.map((variable, index) => ({
      id: `${id}-${index}`,
      variable,
      top: `${(index + 1) * (100 / (variables.length + 1))}%`,
    })));
  }, [currText, id]);

  return (
    <div className="textCard" >
      <div className="nodeHeading">
        {label}
      </div>
      <div>
        <label>
          Text:
          <input className="textInput"
            ref={inputRef}
            value={currText}
            onChange={handleTextChange}
          />
        </label>
      </div>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type="target"
          position={Position.Left}
          id={handle.id}
          style={{ top: handle.top, borderRadius: '50%' }}
        />
      ))}
      <RightDot></RightDot>
    </div>
  );
};
