// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div className="pipeLineToolbar">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='voice' label='Voice' />
                <DraggableNode type='image' label='Image' />
                <DraggableNode type='image' label='Image2' />
                <DraggableNode type='audio' label='Audio' />
                <DraggableNode type='speech' label='Speech' />
                <DraggableNode type='dalle' label='Dalle' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
            </div>
        </div>
    );
};
