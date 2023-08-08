function dijkstra(graph, start) {
    const distances = new Array(graph.length).fill(Infinity);
    const visited = new Array(graph.length).fill(false);
    distances[start] = 0;
  
    for (let i = 0; i < graph.length; i++) {
      // 아직 방문하지 않은 노드 중에서 거리가 가장 짧은 노드를 찾기
      let minDistance = Infinity;
      let minIndex = -1;
      for (let j = 0; j < graph.length; j++) {
        if (!visited[j] && distances[j] < minDistance) {
          minDistance = distances[j];
          minIndex = j;
        }
      }
  
      // 인접한 노드들의 거리를 업데이트
      const neighbors = graph[minIndex];
      for (let j = 0; j < neighbors.length; j++) {
        const [neighbor, weight] = neighbors[j];
        if (distances[minIndex] + weight < distances[neighbor]) {
          distances[neighbor] = distances[minIndex] + weight;
        }
      }
  
      visited[minIndex] = true;
    }
  
    return distances;
  }
  
  const graph = [
    [[1, 2], [2, 4]],     // 노드 0의 [이웃,가중치]
    [[0, 2], [2, 1], [3, 7]],
    [[0, 4], [1, 1], [3, 5], [4, 3]], 
    [[1, 7], [2, 5], [4, 1]], 
    [[2, 3], [3, 1]]      
  ];
  
  const start = 0;
  console.log("Distances from node " + start + "->" + dijkstra(graph, start)); // 0-> 0,2,3,8,6
  