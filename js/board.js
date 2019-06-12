import Cell from "./cell"

class Board {
    constructor(size,num) {
        //size=>{n,m}
        this.size = size;
        this.grid = [];
        this.liveNum = num

    }

    grid_init() {
        let [n, m] = this.size
        let statusList = this.shuffle()
        let k=0
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
                if(this.grid[i][j].status ==1){
                    cxt.fillStyle = "#000000";
                }else{
                    cxt.fillStyle = "#ffffff";
                }
              
                // cell.init(rebaseWidth)
                cxt.fillRect(i * rebaseWidth, j * rebaseWidth, rebaseWidth, rebaseWidth);
            }
        }
    }

    shuffle() {
        let len = this.size[0] * this.size[1]
        let arr = Array(len).fill(0,0,len)
        for(let r=0;r<this.liveNum;r++){
            arr[r] = 1
        }
        while (len) {
            let j = Math.floor(Math.random()*len--);
            [arr[j], arr[len]] = [arr[len], arr[j]];
        }
        return arr

    }
    clear() {

    }
}

export default Board;