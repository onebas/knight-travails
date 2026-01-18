function generatePath(pathsMap, targetNode, rootNode){
    let path = [];
    path.push(targetNode.join());
    while(path[0]!=rootNode.join()){
        path.unshift(pathsMap.get(path[0]));
    }
    return path;
}

export { generatePath };