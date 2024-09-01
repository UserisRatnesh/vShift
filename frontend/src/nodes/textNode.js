// // textNode.js

import '../styles/styles.css';

import { useState } from 'react';
import { RightDot } from '../components/ConnectDots';


export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || 'text_input');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div class="textCard">
      <div class="nodeHeading" >
        Text
      </div>
      <div>
        <label>
          Text:
          <input
            type="text"
            value={currText}
            onChange={handleTextChange}
          />
        </label>
      </div>
      <RightDot id={id}></RightDot>
    </div>
  );
}

// import { useState, useEffect, useRef } from 'react';
// import { Handle, Position } from 'reactflow';

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || 'text_input');
//   const [nodeHeight, setNodeHeight] = useState(80); // Initial height
//   const inputRef = useRef(null);

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   useEffect(() => {
//     if (inputRef.current) {
//       const inputHeight = inputRef.current.scrollHeight;
//       // Adjust nodeHeight to match inputHeight, ensuring a minimum height
//       const newHeight = Math.max(80, inputHeight);
//       setNodeHeight(newHeight);
//     }
//   }, [currText]);

//   return (
//     <div style={{ width: 200, height: nodeHeight, border: '1px solid black' }}>
//       <div>
//         <span>Text</span>
//       </div>
//       <div>
//         <label>
//           Text:
//           <textarea
//             ref={inputRef}
//             value={currText}
//             onChange={handleTextChange}
//             style={{
//               width: '80%',
//               height: nodeHeight, // Sync input height with node height
//               boxSizing: 'border-box',
//             }}
//           />
//         </label>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-output`}
//       />
//     </div>
//   );
// };



