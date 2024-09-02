// // // textNode.js

// import '../styles/styles.css';

// import { useState } from 'react';
// import { RightDot } from '../components/ConnectDots';


// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || 'text_input');

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   return (
//     <div class="textCard">
//       <div class="nodeHeading" >
//         Text
//       </div>
//       <div>
//         <label>
//           Text:
//           <input
//             type="text"
//             value={currText}
//             onChange={handleTextChange}
//             style={{
//               width: '93.5%',
//               padding: '6px',
//               borderRadius: '4px',
//               border: '1px solid #CCC',
//               marginTop: '4px',
//             }}
//           />
//         </label>
//       </div>
//       <RightDot id={id}></RightDot>
//     </div>
//   );
// }

// // import { useState, useEffect, useRef } from 'react';
// // import { Handle, Position } from 'reactflow';

// // export const TextNode = ({ id, data }) => {
// //   const [currText, setCurrText] = useState(data?.text || 'text_input');
// //   const [nodeHeight, setNodeHeight] = useState(80); // Initial height
// //   const inputRef = useRef(null);

// //   const handleTextChange = (e) => {
// //     setCurrText(e.target.value);
// //   };

// //   useEffect(() => {
// //     if (inputRef.current) {
// //       const inputHeight = inputRef.current.scrollHeight;
// //       // Adjust nodeHeight to match inputHeight, ensuring a minimum height
// //       const newHeight = Math.max(80, inputHeight);
// //       setNodeHeight(newHeight);
// //     }
// //   }, [currText]);

// //   return (
// //     <div style={{ width: 200, height: nodeHeight, border: '1px solid black' }}>
// //       <div>
// //         <span>Text</span>
// //       </div>
// //       <div>
// //         <label>
// //           Text:
// //           <textarea
// //             ref={inputRef}
// //             value={currText}
// //             onChange={handleTextChange}
// //             style={{
// //               width: '80%',
// //               height: nodeHeight, // Sync input height with node height
// //               boxSizing: 'border-box',
// //             }}
// //           />
// //         </label>
// //       </div>
// //       <Handle
// //         type="source"
// //         position={Position.Right}
// //         id={`${id}-output`}
// //       />
// //     </div>
// //   );
// // };



import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import '../styles/styles.css';
import { RightDot } from '../components/ConnectDots';


export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || 'text_input');
  const [nodeHeight, setNodeHeight] = useState(80); // Initial height
  const [handles, setHandles] = useState([]);
  const inputRef = useRef(null);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      // Adjust nodeHeight to match inputHeight, ensuring a minimum height
      const inputHeight = inputRef.current.scrollHeight;
      const newHeight = Math.max(80, inputHeight);
      setNodeHeight(newHeight);
    }
  }, [currText]);

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
      id: `${id}-var-${index}`,
      variable,
      top: `${(index + 1) * (100 / (variables.length + 1))}%`,
    })));
  }, [currText, id]);

  return (
    <div className="textCard" style={{ width: 200, height: nodeHeight, border: '1px solid black', position: 'relative' }}>
      <div className="nodeHeading">
        Text
      </div>
      <div>
        <label>
          Text:
          <textarea
            ref={inputRef}
            value={currText}
            onChange={handleTextChange}
            style={{
              width: '93.5%',
              padding: '6px',
              borderRadius: '4px',
              border: '1px solid #CCC',
              marginTop: '4px',
              boxSizing: 'border-box',
              height: '100%',
              minHeight: '40px',
            }}
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
