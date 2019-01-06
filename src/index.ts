import Node from './node';


const cols = 5;
const rows = 5;
const gridCellSize = 20;

let grid = new Array(rows);

let openSet:Array<Node> = new Array<Node>();
let closedSet:Array<Node> = new Array<Node>();
let startNode:Node;
let endNode:Node;

let canvas:HTMLCanvasElement;
let ctx:CanvasRenderingContext2D;

function setup():void {
    //create the grid
    for(let i = 0; i < rows;i++){
        grid[i] = new Array(cols);
        for(let j = 0; j < cols; j++){
            grid[i][j] = new Node(i, j);
        }
    }

    //set start and end nodes
    startNode = grid[0][0];
    console.log(grid[0][1].x)
    endNode = grid[rows -1][cols -1];
    openSet.push(startNode);

    setUpCanvas();
    drawGrid();

    console.log(grid);
    console.log(grid[1][1].x);
}

function setUpCanvas():void{
    canvas = <HTMLCanvasElement> document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    
    canvas.width = 400;
    canvas.height = 400;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawGrid():void{
    for(let i = 0; i < rows;i++){    
        for(let j = 0; j < cols; j++){
            //grid[i][j].render(ctx);
            ctx.rect(grid[i][j].x * gridCellSize, grid[i][j].y * gridCellSize, gridCellSize, gridCellSize);
            ctx.stroke();
        }
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