// ui.js
// Displays the drag-and-drop UI
// --------------------------------------------------

import { useState, useRef, useCallback } from 'react';
import { MarkerType } from 'reactflow';
import ReactFlow, { Controls, Background, applyNodeChanges, applyEdgeChanges, addEdge, MiniMap } from 'reactflow';
import { useRecoilState } from 'recoil';
import { nodesState, edgesState, nodeIDsState } from '../store/atom/atom';
import { } from "../store/selector/selector";
import { InputNode } from '../nodes/inputNode';
import { LLMNode } from '../nodes/llmNode';
import { OutputNode } from '../nodes/outputNode';
import { TextNode } from '../nodes/textNode';
import { DalleNode } from '../nodes/Dalle';

import 'reactflow/dist/style.css';

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  dalle: DalleNode,
  customOutput: OutputNode,
  text: TextNode
};

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const [nodes, setNodes] = useRecoilState(nodesState);
  const [edges, setEdges] = useRecoilState(edgesState);
  const [nodeIDs, setNodeIDs] = useRecoilState(nodeIDsState);

  const getInitNodeData = (nodeID, type) => {
    return { id: nodeID, nodeType: `${type}` };
  };

  const getNodeID = useCallback((type) => {
    const newIDs = { ...nodeIDs };
    if (newIDs[type] === undefined) {
      newIDs[type] = 0;
    }
    newIDs[type] += 1;
    setNodeIDs(newIDs);
    return `${type}-${newIDs[type]}`;
  }, [nodeIDs, setNodeIDs]);

  const addNode = useCallback((node) => {
    setNodes((prevNodes) => [...prevNodes, node]);
  }, [setNodes]);

  const onNodesChange = useCallback((changes) => {
    setNodes((prevNodes) => applyNodeChanges(changes, prevNodes));
  }, [setNodes]);

  const onEdgesChange = useCallback((changes) => {
    setEdges((prevEdges) => applyEdgeChanges(changes, prevEdges));
  }, [setEdges]);

  const onConnect = useCallback((connection) => {
    setEdges((prevEdges) => addEdge({
      ...connection,
      type: 'smoothstep',
      animated: true,
      markerEnd: {
        type: MarkerType.Arrow,
        height: '20px',
        width: '20px',
      },
    }, prevEdges));
  }, [setEdges]);


  // const onConnect = useCallback((params) => {
  //   console.log('Connection Params:', params);
  //   const { sourceHandle, targetHandle } = params;

  //   if (!sourceHandle || !targetHandle) {
  //     console.error("Connection failed due to missing handle IDs", params);
  //     return;
  //   }

  //   setEdges((prevEdges) =>
  //     addEdge(
  //       {
  //         ...params,
  //         type: 'smoothstep',
  //         animated: true,
  //         markerEnd: {
  //           type: MarkerType.Arrow,
  //           height: '20px',
  //           width: '20px',
  //         },
  //       },
  //       prevEdges
  //     )
  //   );
  // }, [setEdges]);



  // const onDrop = useCallback(
  //   (event) => {
  //     event.preventDefault();

  //     const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
  //     if (event?.dataTransfer?.getData('application/reactflow')) {
  //       const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
  //       const type = appData?.nodeType;

  //       // Check if the dropped element is valid
  //       if (typeof type === 'undefined' || !type) {
  //         return;
  //       }

  //       const position = reactFlowInstance.project({
  //         x: event.clientX - reactFlowBounds.left,
  //         y: event.clientY - reactFlowBounds.top,
  //       });

  //       const nodeID = getNodeID(type);
  //       const newNode = {
  //         id: nodeID,
  //         type,
  //         position,
  //         data: getInitNodeData(nodeID, type),
  //       };

  //       addNode(newNode);
  //     }
  //   },
  //   [reactFlowInstance, getNodeID, addNode]
  // );

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const dataTransfer = event?.dataTransfer?.getData('application/reactflow');

      if (dataTransfer) {
        const appData = JSON.parse(dataTransfer);
        const type = appData?.nodeType;
        const label = appData?.label; // Extract the label from appData

        // Check if the dropped element is valid
        if (typeof type === 'undefined' || !type) {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position,
          data: {
            ...getInitNodeData(nodeID, type),
            label, // Add the label to the node's data
          },
        };

        addNode(newNode);
      }
    },
    [reactFlowInstance, getNodeID, addNode]
  );


  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <>
      <div ref={reactFlowWrapper} style={{ width: '100vw', height: '70vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onInit={setReactFlowInstance}
          nodeTypes={nodeTypes}
          proOptions={proOptions}
          snapGrid={[gridSize, gridSize]}
          connectionLineType='smoothstep'
        >
          <Background color="#aaa" gap={gridSize} />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </>
  );
};
