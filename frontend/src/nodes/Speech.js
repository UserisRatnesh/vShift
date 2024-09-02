import { LlmLeftDot, LlmRightDot } from '../components/ConnectDots';
import '../styles/styles.css';

export const SpeechNode = ({ id, data }) => {
    return (
        <div className="llmNode">
            <LlmLeftDot id={id} location={50}></LlmLeftDot>
            <div className="nodeHeading">
                Speech Node
            </div>
            <div style={{ textAlign: 'center', fontSize: 14 }}>
                This is a Speech.
            </div>
            <LlmRightDot id={id}></LlmRightDot>
        </div>
    );
}