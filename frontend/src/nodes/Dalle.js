import { LlmLeftDot, LlmRightDot } from '../components/ConnectDots';
import '../styles/styles.css';

export const DalleNode = ({ id, data }) => {
    const { label } = data;
    return (
        <div className="llmNode">
            <LlmLeftDot id={id} location={50}></LlmLeftDot>
            <div className="nodeHeading">
                {label}
            </div>
            <div style={{ textAlign: 'center', fontSize: 14 }}>
                This is a {label}.
            </div>
            <LlmRightDot id={id}></LlmRightDot>
        </div>
    );
}