function findNeighbors(cell){
    let row = cell[0], column = cell[1];
    let neighbors = []; 

    let aboveRow = row + 2;
    let belowRow = row - 2;
    let up = column + 1;
    let down = column - 1;

    if(aboveRow<=7){
        if(up<7) neighbors.push([aboveRow, up]);
        if(down>0) neighbors.push([aboveRow, down]);
    }
        
    if(belowRow>=0){
        if(up<7) neighbors.push([belowRow, up]);
        if(down>0) neighbors.push([belowRow, down]);       
    }

    let rightColumn = column + 2;
    let leftColumn = column - 2;
    up = row + 1;
    down = row - 1;

    if(rightColumn<=7){
        if(up<7) neighbors.push([up, rightColumn]);
        if(down>0) neighbors.push([down, rightColumn]);
    }
        
    if(leftColumn>=0){
        if(up<7) neighbors.push([up, leftColumn]);
        if(down>0) neighbors.push([down, leftColumn]);       
    }

    return neighbors;
}

export { findNeighbors };