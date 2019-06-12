class Cell{
    constructor(x, y,cxt) {
        this.status = 1;
        this.x = x;
        this.y = y;
        this.cxt = cxt;
    }

    setAlive(){
        this.status = 1;
    }

    setDead(){
        this.status = 0;
    }
    init () {
        this.cxt.fillRect(this.x*rebaseWidth,this.y*rebaseWidth,rebaseWidth,rebaseWidth)
    }
}

// let cell = new Cell(0, 0, 0);
export default Cell;