import Cell from "./cell"

class Board {
    constructor() {
        this.x = null;
        this.y = null;
        this.liveNum = null;
        this.rebaseWidth = null;
        this.timer = null;
        this.grid = [];
        this.canvas = document.getElementById("canvas");;
        this.cxt = this.canvas.getContext("2d");;
    }

    dataInit(arr) {
        [this.x, this.y, this.rebaseWidth, this.liveNum] = arr
    }

    start() {
        return ({ data, reset }, signal) => {
            console.log()
            switch (reset) {
                case true:
                    this.dataInit(data)
                    this.gridInit()
                    this.draw()
                    this.startAnimation()
                    break
                case false:
                    if (signal == "start") {
                        this.startAnimation()
                    }else{
                        this.stopAnimation()
                    }
                    break
            }
        }
    }

    reset() {
        return (data) => {
            //清空计时器
            // 清空canvas
            this.stopAnimation()
            this.dataInit(data)
            this.gridInit()
            this.draw()
        }
    }

    startAnimation() {
        this.timer = setInterval(
            () => {
                // console.log(1)
                this.update()
                this.draw()
            }, 50
        )
    }

    stopAnimation() {
        // console.log(22)
        clearInterval(this.timer)
        this.timer = null
    }
    //初始化grid数组
    gridInit() {
        let statusList = this.shuffle()
        for (let i = 0; i < this.x; i++) {
            this.grid[i] = new Array();
            for (let j = 0; j < this.y; j++) {
                this.grid[i][j] = new Cell(statusList[i * this.x + j], i, j);
            }
        }
    }

    draw() {
        const rebaseWidth = this.rebaseWidth
        let [canvas, cxt] = [this.canvas, this.cxt]
        let [xGrid, yGrid] = [this.x, this.y]
        canvas.width = xGrid * rebaseWidth;
        canvas.height = yGrid * rebaseWidth;
        for (let i = 0; i < xGrid; i++) {
            for (let j = 0; j < yGrid; j++) {
                if (this.grid[i][j].status == 1) {
                    cxt.fillStyle = "#000000";
                } else {
                    cxt.fillStyle = "#eeeeee";
                }
                cxt.fillRect(i * rebaseWidth, j * rebaseWidth, rebaseWidth, rebaseWidth);
            }
        }
    }

    shuffle() {
        let len = this.x * this.y
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
        let newGrid = []
        for (let i = 0; i < this.x; i++) {
            newGrid[i] = []
            for (let j = 0; j < this.y; j++) {
                newGrid[i][j] = new Cell(this.grid[i][j].status, i, j);
            }
        }
        let status;
        for (let i = 0; i < this.x; i++) {
            for (let j = 0; j < this.y; j++) {
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
        // console.log(this.grid)
    }

    getNewStatus(i, j) {
        let [n, m] = [this.x, this.y]
        let num_alive = 0;
        if (i - 1 >= 0 && j - 1 >= 0) {
            if (this.grid[i - 1][j - 1].status == 1) {
                num_alive++
            }
        }
        if (i - 1 >= 0) {
            if (this.grid[i - 1][j].status == 1) {
                num_alive++
            }
        }
        if (i - 1 >= 0 && j + 1 < m) {
            if (this.grid[i - 1][j + 1].status == 1) {
                num_alive++
            }
        }
        if (j - 1 >= 0) {
            if (this.grid[i][j - 1].status == 1) {
                num_alive++
            }
        }
        if (j + 1 < m) {
            if (this.grid[i][j + 1].status == 1) {
                num_alive++
            }
        }
        if (i + 1 < n && j - 1 >= 0) {
            if (this.grid[i + 1][j - 1].status == 1) {
                num_alive++
            }
        }
        if (i + 1 < n) {
            if (this.grid[i + 1][j].status == 1) {
                num_alive++
            }
        }
        if (i + 1 < n && j + 1 < m) {
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