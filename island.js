function getNeighbors(row, col, graph) {
  const res = [];
  // Check top
  if(row > 0 && graph[row -1][col] === 1) res.push([row -1, col]);
  // Check bottom
  if(row < graph.length -1  && graph[row +1][col] === 1) res.push([row +1, col]);
  // Check left
  if(col > 0 && graph[row][col -1] === 1) res.push([row, col -1]);
  // Check right
  if(col < graph[row].length -1  && graph[row][col +1] === 1) res.push([row, col +1]);
  // Return neighbors
  return res;
  // Your code here
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  const visited = new Set();
  // Create a stack, put the starting node in the stack
  const stack = [[row,col]];
  // Put the stringified starting node in visited
  let node = [row, col];
  visited.add(node.toString());
  // Initialize size to 0
  let size = 0

  // While the stack is not empty,
  while(stack.length > 0){

    // Pop the first node
    node = stack.pop();
    // DO THE THING (increment size by 1)
    size++
    [row,col] = node;
    let neighs = getNeighbors(row, col, graph);
    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    neighs.forEach(neighNode => {
      if(!visited.has(neighNode.toString())){
        stack.push(neighNode);
        visited.add(neighNode.toString());
      }
    })
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
  }
  return size;
  // return size

  // Your code here
}

module.exports = [getNeighbors, islandSize];
