import Constants from './constants'

export default class Node {
    public x:number;
    public y:number;
    public gCost:number;
    public hCost:number;
    public fCost:number;
    public ctx:CanvasRenderingContext2D;

    constructor(x:number, y:number, ctx:CanvasRenderingContext2D){
        this.x = x;
        this.y = y;
        this.ctx = ctx;
    }

    render(color:number):void{
        this.ctx.rect(this.x * Constants.gridCellSize, this.y * Constants.gridCellSize, Constants.gridCellSize, Constants.gridCellSize);
    }
}