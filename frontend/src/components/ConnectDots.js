
import { Handle, Position } from 'reactflow';

export const LeftDot = ({ id }) => {
    return <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input`}
        style={{ top: '50%', borderRadius: '50%' }}
    />
}


export const RightDot = ({ id }) => {
    return <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
        style={{ top: '50%', borderRadius: '50%' }}
    />
}

export const LlmLeftDot = ({ id, location }) => {
    return <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{
            top: `${location}%`,
            backgroundColor: '#007BFF',
            borderRadius: '50%',
            width: 10,
            height: 10
        }}
    />
}

export const LlmRightDot = ({ id }) => {
    return <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        style={{
            backgroundColor: '#007BFF',
            borderRadius: '50%',
            width: 10,
            height: 10
        }}
    />
}


