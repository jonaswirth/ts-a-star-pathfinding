export default class Node {
    public x:number;
    public y:number;
    public gCost:number;
    public hCost:number;
    public fCost:number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    render(ctx:CanvasRenderingContext2D):void{
        ctx.rect(this.x * 5, this.y * 5, 5, 5);
    }
}