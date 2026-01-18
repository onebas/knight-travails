import { findNeighbors } from "./Neighbors.js";

function shortestPath(a, b){
    let queue = [];
    let paths = new Map();
    let visited = new Set();

    if(a.join() == b.join()) return a;

    queue.push(a);
    visited.add(a);

    while(queue.length!=0){
        let vertex = queue.shift();

        if(vertex.join() == b.join()){
            break;
            // functionality for creating path to be added in a different module
        }

        let neighbors = findNeighbors(vertex);
        for(let neighbor of neighbors){
            if(!(visited.has(neighbor))){
                visited.add(neighbor);
                queue.push(neighbor);
                paths.set(neighbor, vertex);
            }
        }
    }
}   


shortestPath([3, 3], [4, 3]);
