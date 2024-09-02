import { LlmLeftDot, LlmRightDot } from '../components/ConnectDots';
import '../styles/styles.css';

export const DalleNode = ({ id, data }) => {
    return (
        <div className="llmNode">
            <LlmLeftDot id={id} location={50}></LlmLeftDot>
            <div className="nodeHeading">
                Dalle Node
            </div>
            <div style={{ textAlign: 'center', fontSize: 14 }}>
                This is a Dalle.
            </div>
            <LlmRightDot id={id}></LlmRightDot>
        </div>
    );
}