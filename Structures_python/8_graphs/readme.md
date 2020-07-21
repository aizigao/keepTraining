## vocabulary and definitions

### vertex

- node
- has key and payload

### Edge

- An edge connects two vertices to show that there is a relationship between them
- may be one-way or two-way.
- directed graph, or a digraph

### weight

- a cost to go from one vertex to another.

### Path

## Cycle

- path (V5,V2,V3,V5) is a cycle
- acyclic graph
- A directed graph with no cycles is called a directed acyclic graph or a DAG.

## xx

```
G = (V,E)
```

- Graph() creates a new, empty graph.

- addVertex(vert) adds an instance of Vertex to the graph.

- addEdge(fromVert, toVert) Adds a new, directed edge to the graph that connects two vertices.

- addEdge(fromVert, toVert, weight) Adds a new, weighted, directed edge to the graph that connects two vertices.

- getVertex(vertKey) finds the vertex in the graph named vertKey.

- getVertices() returns the list of all vertices in the graph.

- in returns True for a statement of the form vertex in graph, if the given vertex is in the graph, False otherwise.
