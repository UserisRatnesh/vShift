from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import networkx as nx
from pydantic import BaseModel
from typing import List, Union



app = FastAPI()

# Allow cross-origin requests from your React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[dict]
    edges: List[Edge]

@app.post("/pipelines/parse")
async def parse_pipeline(pipeline: Pipeline):
    G = nx.DiGraph()
    G.add_nodes_from([node['id'] for node in pipeline.nodes])
    G.add_edges_from([(edge.source, edge.target) for edge in pipeline.edges])

    is_dag = nx.is_directed_acyclic_graph(G)
    return {
        "num_nodes": G.number_of_nodes(),
        "num_edges": G.number_of_edges(),
        "is_dag": is_dag
    }
