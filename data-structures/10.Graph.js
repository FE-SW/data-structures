class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(v1, v2) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  
    removeEdge(v1, v2) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }
  
    removeVertex(vertex) {
      while(this.adjacencyList[vertex].length) {
        const adjacencyVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacencyVertex);
      }
      delete this.adjacencyList[vertex];
    }
  }
  
  let g = new Graph();
  g.addVertex("Tokyo");
  g.addVertex("San Francisco");
  g.addEdge("Tokyo", "San Francisco");
  
  console.log(g.adjacencyList);
  // { Tokyo: [ 'San Francisco' ], 'San Francisco': [ 'Tokyo' ] }
  
  g.removeEdge("Tokyo", "San Francisco");
  
  console.log(g.adjacencyList);
  // { Tokyo: [], 'San Francisco': [] }
  
  g.removeVertex("Tokyo");
  
  console.log(g.adjacencyList);
  // { 'San Francisco': [] }
  