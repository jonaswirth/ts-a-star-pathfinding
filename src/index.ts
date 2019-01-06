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
    for(let i = 0;i<openSet.length;i++){
        openSet[i].render("green");
    }
}

function run():void{
    while(openSet.length > 0){
        //this is where the magic will be happening
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setup();
}, false);