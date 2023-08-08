function bfs(graph, start) {
    let visited = new Array(graph.length).fill(false);
    let queue = [start];
    let result = [];
  
    visited[start] = true;
  
    while (queue.length > 0) {
      let node = queue.shift();
      result.push(node);
  
      graph[node].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
  
    return result;
  }
  
  const graph = [
    [1, 2],   // 노드 0의 이웃
    [0, 3, 4], // 노드 1의 이웃
    [0, 4],    // 노드 2의 이웃
    [1, 5],    // 노드 3의 이웃
    [1, 2],    // 노드 4의 이웃
    [3]        // 노드 5의 이웃
  ];
  
  console.log("BFS result: " + bfs(graph, 0)); // 0,1,2,3,4,5
  