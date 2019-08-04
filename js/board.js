import Cell from "./cell"
import shuffle from "lodash/shuffle"

class Board {
    constructor() {
        this.BoardData = {
            x : 3,
            y :3,
            liveCellNums : 3,
            celldWith :10
        }
        this.timer = null;
        this.grid = [];
        this.statusList =  null;
        this.canvas = document.getElementById("canvas") ;
        //便于测试 
        this.cxt =  this.canvas ?  this.canvas.getContext("2d") : null;
    }

    /*
    *初始化board，传data对象 =>{
        x: 横轴细胞数量
        y:  纵轴细胞数量
        liveCellNums：  存活细胞数
        celldWith： 细胞宽度
    }
    得到x,y，liveCellNums 后可以通过getRandCellStatus方法返回一个的01数组来模拟细胞状态。
    */
    init(data) {
        this.BoardData = data 
        this.gridInit()
    }

    reset() {
        let {
            x,y
        } = this.BoardData
            this.stopAnimation()
            // console.log(0)
            this.gridInit(new Array(x*y).fill(0))
    }

    setp(){
        this.stopAnimation()
        this.updateCells()
    }

    startAnimation() {
        this.timer = setInterval(
            ()=>{
                this.updateCells()
            }
            , 50
        )
    }

    stopAnimation() {
        clearInterval(this.timer)
    }

    /*
    默认调用getRandCellStatus方法随即生成状态数组
    gridInit，通过双重for循环遍历来生成一个二维数组存储Cell。
    */
    gridInit(cellStatus = this.getRandCellStatus()) {
        let { x, y, celldWith } = this.BoardData;
        if(this.canvas){
            this.canvas.width = x * celldWith + x
            this.canvas.height = y * celldWith + y
        }
        this.statusList = cellStatus
        for (let i = 0; i < x; i++) {
            this.grid[i] = [];
            for (let j = 0; j < y; j++) {
                this.grid[i][j] = new Cell(cellStatus[i * y + j], i, j,this.getNeighborIndex(i,j));
                if(this.cxt)
                    this.grid[i][j].darwSelf(this.cxt, celldWith)
            }
        }
    }

    getRandCellStatus() {
        let { x, y, liveCellNums } = this.BoardData,
            arr = Array(x * y).fill(0).fill(1, 0, liveCellNums);
        return shuffle(arr)
    }

    //获取相邻细胞的索引，并返回
    getNeighborIndex(i, j) {
        let {
            x,
            y,
        } = this.BoardData,
            arr = [];
        [-1, 0, 1].forEach(
            val => {
                if (i + val >= 0 && i + val <x ) {
                    if (j - 1 >= 0 )
                        arr.push((i + val) * y + j - 1)
                    if (val != 0)
                        arr.push((i + val) * y + j)
                    if (j + 1 <= y - 1 )
                        arr.push((i + val) * y + j + 1)
                }
            });
        return arr 
    }

    //遍历this.grid时调用cell.updataStatus以及cell.darwwSelf更新canvas。
    updateCells() {
        let {
            x,y,celldWith
        } = this.BoardData,
        shadowStatusLists = [];
        for(let i = 0; i < x; i++){
            for(let j = 0; j < y; j++){
                //调用updataStatus会返回自身的状态，将更新后的状态存储起来，然后赋值给statusList
                shadowStatusLists[i*y+ j] = this.grid[i][j].updataStatus(this.statusList)
                if(this.cxt)
                    this.grid[i][j].darwSelf(this.cxt,celldWith)
            }
        }
        this.statusList = shadowStatusLists
    }


}

export default Board;