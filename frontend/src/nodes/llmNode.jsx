

import { LlmLeftDot, LlmRightDot } from '../components/ConnectDots';
import '../styles/styles.css';


export const LLMNode = ({ id, data }) => {
  const { label } = data; // Access label from data

  return (
    <div className="llmNode">
      <LlmLeftDot id={id} location={30} />
      <LlmLeftDot id={id} location={60} />
      <div className="nodeHeading">
        {label}
      </div>
      <div style={{ textAlign: 'center', fontSize: 14 }}>
        This is {label}
      </div>
      <LlmRightDot id={id} />
    </div>
  );
};
