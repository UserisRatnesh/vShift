// textNode.js

import { useRecoilState } from 'recoil';
import { Handle, Position } from 'reactflow';
import { currTextState } from '../store/atom/atom';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useRecoilState(currTextState);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div style={{ width: 200, height: 80, border: '1px solid black' }}>
      <div>
        <span>Text</span>
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
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
}
