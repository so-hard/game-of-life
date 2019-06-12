import Cell from "../js/cell"

class Board {
    constructor(size) {
        //size=>{n,m}
        this.size = size;
        this.grid = NaN;
    }

    grid_init() {
        let n = this.size.n;
        let m = this.size.m;
        this.grid = new Array();
        for (let i = 0; i < n; i++) {
            this.grid[i] = new Array();
            for (let j = 0; j < m; j++) {
                this.grid[i][j] = new Cell(Math.floor((Math.random()+0.5)), i, j);
            }
        }
    }

    draw() {

    }

    clear() {

    }
}

export default Board;