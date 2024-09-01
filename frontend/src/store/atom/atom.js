// atoms.js
import { atom } from 'recoil';


// Atom for nodes
export const nodesState = atom({
    key: 'nodesState',
    default: [],
});

// Atom for edges
export const edgesState = atom({
    key: 'edgesState',
    default: [],
});

// Atom for node IDs
export const nodeIDsState = atom({
    key: 'nodeIDsState',
    default: {},
});
