// store.js


// state management done using zustand
// import { create } from "zustand";
// import {

//   addEdge,
//   applyNodeChanges,
//   applyEdgeChanges,
//   MarkerType,
// } from 'reactflow';

// export const useStore = create((set, get) => ({
//   nodes: [],
//   edges: [],
//   getNodeID: (type) => {
//     const newIDs = { ...get().nodeIDs };
//     if (newIDs[type] === undefined) {
//       newIDs[type] = 0;
//     }
//     newIDs[type] += 1;
//     set({ nodeIDs: newIDs });
//     return `${type}-${newIDs[type]}`;
//   },
//   addNode: (node) => {
//     set({
//       nodes: [...get().nodes, node]
//     });
//   },
//   onNodesChange: (changes) => {
//     set({
//       nodes: applyNodeChanges(changes, get().nodes),
//     });
//   },
//   onEdgesChange: (changes) => {
//     set({
//       edges: applyEdgeChanges(changes, get().edges),
//     });
//   },
//   onConnect: (connection) => {
//     set({
//       edges: addEdge({ ...connection, type: 'smoothstep', animated: true, markerEnd: { type: MarkerType.Arrow, height: '20px', width: '20px' } }, get().edges),
//     });
//   },
//   updateNodeField: (nodeId, fieldName, fieldValue) => {
//     set({
//       nodes: get().nodes.map((node) => {
//         if (node.id === nodeId) {
//           node.data = { ...node.data, [fieldName]: fieldValue };
//         }

//         return node;
//       }),
//     });
//   },
// }));


// StoreComponent.js
import { useRecoilState } from 'recoil';
import { nodesState, edgesState, nodeIDsState } from './store/atom/atom.js';
import { addEdge, applyNodeChanges, applyEdgeChanges, MarkerType } from 'reactflow';

export const StoreComponent = () => {
  const [nodes, setNodes] = useRecoilState(nodesState);
  const [edges, setEdges] = useRecoilState(edgesState);
  const [nodeIDs, setNodeIDs] = useRecoilState(nodeIDsState);

  const getNodeID = (type) => {
    const newIDs = { ...nodeIDs };
    if (newIDs[type] === undefined) {
      newIDs[type] = 0;
    }
    newIDs[type] += 1;
    setNodeIDs(newIDs);
    return `${type}-${newIDs[type]}`;
  };

  const addNode = (node) => {
    setNodes([...nodes, node]);
  };

  const onNodesChange = (changes) => {
    setNodes(applyNodeChanges(changes, nodes));
  };

  const onEdgesChange = (changes) => {
    setEdges(applyEdgeChanges(changes, edges));
  };

  const onConnect = (connection) => {
    setEdges(addEdge({ ...connection, type: 'smoothstep', animated: true, markerEnd: { type: MarkerType.Arrow, height: '20px', width: '20px' } }, edges));
  };

  const updateNodeField = (nodeId, fieldName, fieldValue) => {
    setNodes(nodes.map((node) => {
      if (node.id === nodeId) {
        node.data = { ...node.data, [fieldName]: fieldValue };
      }
      return node;
    }));
  };

  // Return your component JSX here
};
