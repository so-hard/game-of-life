import Cell from "./cell"

class Board {
    constructor(size, num) {
        //size=>{n,m}
        this.size = size;
        this.grid = [];
        this.liveNum = num


    }

    grid_init() {
        let [n, m] = this.size
        let statusList = this.shuffle()
        let k = 0
        for (let i = 0; i < n; i++) {
            this.grid[i] = new Array();
            for (let j = 0; j < m; j++) {
                this.grid[i][j] = new Cell(statusList[k++], i, j);
            }
        }
    }

    draw() {
        const rebaseWidth = 20
        let canvas = document.getElementById("canvas"),
            cxt = canvas.getContext("2d");
        let [xGrid, yGrid] = this.size
        canvas.width = xGrid * rebaseWidth;
        canvas.height = yGrid * rebaseWidth;
        for (let i = 0; i < xGrid; i++) {
            for (let j = 0; j < yGrid; j++) {
                // let cell = new Cell(i,j,cxt)
                // console.log(this.grid)
                if (this.grid[i][j].status == 1) {
                    cxt.fillStyle = "#000000";
                } else {
                    cxt.fillStyle = "#eeeeee";
                }

                // cell.init(rebaseWidth)
                cxt.fillRect(i * rebaseWidth, j * rebaseWidth, rebaseWidth, rebaseWidth);
            }
        }
    }

    shuffle() {
        let len = this.size[0] * this.size[1]
        let arr = Array(len).fill(0, 0, len)
        for (let r = 0; r < this.liveNum; r++) {
            arr[r] = 1
        }
        while (len) {
            let j = Math.floor(Math.random() * len--);
            [arr[j], arr[len]] = [arr[len], arr[j]];
        }
        return arr

    }


    update() {
        let [n, m] = this.size
        let newGrid = []
        for (let i = 0; i < n; i++) {
            newGrid[i] = []
            for (let j = 0; j < m; j++) {
                newGrid[i][j] = new Cell(this.grid[i][j].status, i, j);
            }
        }
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                status = this.getNewStatus(i, j)
                if (status == 1) {
                    newGrid[i][j].setAlive()
                }
                if (status == 0) {
                    newGrid[i][j].setDead()
                }
            }
        }
        this.grid = newGrid
        console.log(this.grid)
        this.draw()
    }

    getNewStatus(i, j) {
        let [n, m] = this.size
        let num_alive = 0;
        if (i - 1 > 0 && j - 1 > 0) {
            if (this.grid[i - 1][j - 1].status == 1) {
                num_alive++
            }
        }
        if (i - 1 > 0) {
            if (this.grid[i - 1][j].status == 1) {
                num_alive++
            }
        }
        if (i - 1 > 0 && j + 1 < m) {
            if (this.grid[i - 1][j + 1].status == 1) {
                num_alive++
            }
        }
        if (j - 1 > 0) {
            if (this.grid[i][j - 1].status == 1) {
                num_alive++
            }
        }
        if (j + 1 < m) {
            if (this.grid[i][j + 1].status == 1) {
                num_alive++
            }
        }
        if (i + 1 < n && j - 1 > 0) {
            if (this.grid[i + 1][j - 1].status == 1) {
                num_alive++
            }
        }
        if (i + 1 < n) {
            if (this.grid[i + 1][j].status == 1) {
                num_alive++
            }
        }
        if (i + 1 > n && j + 1 > m) {
            if (this.grid[i + 1][j + 1].status == 1) {
                num_alive++
            }
        }

        //rule
        if (num_alive == 3) {
            return 1
        } else if (num_alive == 2) {
            return -1
        } else {
            return 0
        }

    }
}

export default Board;