import Constants from './constants';
import Node from './node';

let grid = new Array(Constants.rows);

let openSet:Array<Node> = new Array<Node>();
let closedSet:Array<Node> = new Array<Node>();
let startNode:Node;
let endNode:Node;

let canvas:HTMLCanvasElement;
let ctx:CanvasRenderingContext2D;

function setup():void {
    setUpCanvas();
    //create the grid
    for(let i = 0; i < Constants.rows;i++){
        grid[i] = new Array(Constants.cols);
        for(let j = 0; j < Constants.cols; j++){
            grid[i][j] = new Node(i, j, ctx);
        }
    }

    //set start and end nodes
    startNode = grid[0][0];
    endNode = grid[Constants.rows -1][Constants.cols -1];
    openSet.push(startNode);

    
    drawGrid();

    run();
}

function setUpCanvas():void{
    canvas = <HTMLCanvasElement> document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    
    canvas.width = Constants.cols * Constants.gridCellSize + 1;
    canvas.height = Constants.rows * Constants.gridCellSize + 1;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawGrid():void{
    for(let i = 0; i < Constants.rows;i++){    
        for(let j = 0; j < Constants.cols; j++){
            grid[i][j].render("white");
        }
    }
    startNode.render("blue");
    endNode.render("blue");
}

function run():void{
    var currentNode = startNode;
    while(openSet.length > 0){
        if(currentNode == endNode){
            console.log("Path found");
            break;
        }
        var neighbors = getNeighbors(currentNode);
        for(var i = 0; i<neighbors.length;i++){
            if(closedSet.some(x => x === neighbors[i]))
                continue;
            
            var temp = currentNode.gCost + 1;

            if(openSet.some(x => x === neighbors[i])){
                if(temp < neighbors[i].gCost)
                    neighbors[i].gCost = temp;
            }

        }
        removeNodeFromArray(openSet, currentNode);
    }
}

function getNeighbors(node:Node):Array<Node>{
    var neighbors = new Array<Node>();

    for(var i = node.x - 1; i< node.x + 2;i++){
        if(i < 0 || i > Constants.cols){
            continue;
        }
        for(var j = node.y - 1; j<node.y + 2; j++){    
            if(j < 0 || j > Constants.rows || (i == node.x && j == node.y)){
                continue;
            }
            neighbors.push(grid[i][j])
        }
    }
    return neighbors;
}

function removeNodeFromArray(array:Array<Node>, node:Node):void{
    for(var i = array.length-1; i>=0; i--){
        if(array[i] === node){
            array.splice(i, 1);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setup();
}, false);