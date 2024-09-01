

import { LlmLeftDot, LlmRightDot } from '../components/ConnectDots';
import '../styles/styles.css';


export const LLMNode = ({ id, data }) => {
  return (
    <div class="llmNode">
      <LlmLeftDot id={id} location={30}></LlmLeftDot>
      <LlmLeftDot id={id} location={60}></LlmLeftDot>

      <div class="nodeHeading">
        LLM Node
      </div>
      <div style={{ textAlign: 'center', fontSize: 14 }}>
        This is a LLM.
      </div>
      <LlmRightDot id={id}></LlmRightDot>
    </div>
  );
}
