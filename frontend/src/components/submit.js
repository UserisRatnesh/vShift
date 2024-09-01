// submit.js

import { nodesState, edgesState } from "../store/atom/atom"
import { useRecoilValue } from "recoil";

export const SubmitButton = () => {

    const nodes = useRecoilValue(nodesState);
    const edges = useRecoilValue(edgesState);
    const handle = () => {
        console.log(nodes);
        console.log(edges);
        alert(`Number of nodes: ${nodes.length}\nNumber of edges: ${edges.length}`);
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button type="submit" onClick={handle}>Submit</button>
        </div>
    );
}
