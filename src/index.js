import { findNeighbors } from "./Neighbors.js";
import { generatePath } from "./PathGenerator.js";

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
            let path = generatePath(paths, b, a);
            console.log(`You made it in ${path.length-1} moves`);
            for(let vertex of path) console.log(vertex);
            break;
            
        }

        let neighbors = findNeighbors(vertex);
        for(let neighbor of neighbors){
            if(!(visited.has(neighbor))){
                visited.add(neighbor);
                queue.push(neighbor);
                paths.set(neighbor.join(), vertex.join());
            }
        }
    }
}   


