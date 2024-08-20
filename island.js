function getNeighbors(row, col, graph) {
  const neighs = [];
  // Check top
  if(row > 0 && graph[row -1][col] === 1) neighs.push([row -1, col]);
  // Check bottom
  if(row < graph.length - 1 && graph[row +1][col] === 1) neighs.push([row +1, col]);
  // Check left
  if(col > 0 && graph[row][col -1] === 1) neighs.push([row, col -1]);
  // Check right
  if (col < graph[row].length -1 && graph[row][col +1] === 1) neighs.push([row, col +1]);
  // Return neighbors
  return neighs
  // Your code here

}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  const visited = new Set();

  // Create a stack, put the starting node in the stack
  const stack = [[row, col]];

  // Put the stringified starting node in visited
  visited.add(`${row}, ${col}`);

  // Initialize size to 0
  let size = 0;

  // While the stack is not empty,
  while (stack.length > 0){

    // Pop the first node
    let node = stack.pop();
    let currRow = node[0];
    let currCol = node[1];

    // DO THE THING (increment size by 1)
    size++;

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
    let neighs = getNeighbors(currRow,currCol, graph);
    for (let neigh of neighs) {
      let nodeString = `${neigh[0]}, ${neigh[1]}`;
      if (!visited.has(nodeString)) {
        console.log('Pushing ${neighbor}');
        stack.push(neigh);
        visited.add(nodeString)
      }
    }
  }
  // return size
  return size

  // Your code here
}

module.exports = [getNeighbors, islandSize];
