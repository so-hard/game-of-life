class Cell{
    constructor(status, x, y) {
        this.status = status;
        this.x = x;
        this.y = y;
    }

    setAlive(){
        this.status = 1;
    }

    setDead(){
        this.status = 0;
    }
}

// let cell = new Cell(0, 0, 0);
export default Cell;