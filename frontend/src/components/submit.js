// submit.js

import { nodesState, edgesState } from "../store/atom/atom";
import { useRecoilValue } from "recoil";

export const SubmitButton = () => {
    const nodes = useRecoilValue(nodesState);
    const edges = useRecoilValue(edgesState);


    const handle = async () => {
        console.log(nodes);
        console.group(edges);
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nodes: nodes,
                    edges: edges
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            alert(`Number of nodes: ${data.num_nodes}\nNumber of edges: ${data.num_edges}\nIs DAG: ${data.is_dag}`);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button type="submit" onClick={handle}>Submit</button>
        </div>
    );
}
