// // selectors.js
import { selector } from 'recoil';
import { nodeIDsState } from '../atom/atom';

export const getNextNodeID = selector({
    key: 'getNextNodeID',
    get: ({ get }) => (type) => {
        const nodeIDs = get(nodeIDsState);
        const newIDs = { ...nodeIDs };
        if (newIDs[type] === undefined) {
            newIDs[type] = 0;
        }
        newIDs[type] += 1;

        // Return the new unique ID
        return `${type}-${newIDs[type]}`;
    },
});
