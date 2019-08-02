class Cell {
    //四个参数自身的状态 x，y自身的坐标位置，以及相邻的细胞索引
    constructor(status, x, y,neighborIndex) {
        this.status = status;
        this.x = x;
        this.y = y;
        this.neighborIndex = neighborIndex
    }

    
    darwSelf(cxt, celldWith) {
        if (this.status) {
            cxt.fillStyle = "#000000";
        } else {
            cxt.fillStyle = "#eeeeee";
        }
        cxt.fillRect(this.x * celldWith+ this.x , this.y * celldWith + this.y , celldWith, celldWith);
    }

    setAlive() {
        this.status = 1;
    }

    setDead() {
        this.status = 0;
    }

    //根据相邻的细胞状态更新自己的状态，statusList为上次细胞状态的暂存。
    updataStatus(statusList) {
        let neighborLiveNum ;
        neighborLiveNum = this.neighborIndex.reduce((acc,cur) => {
           return acc + statusList[cur]
        },0)
        // console.log(neighborLiveNum)
        //周围活细胞为3时必然存活，周围细胞为2且自身状态为存活才存活
        if((neighborLiveNum == 3)||(this.status && neighborLiveNum == 2)) {
            this.setAlive()
        }else{
            this.setDead()
        }
        //返回自身的状态
        return this.status
    }
}



export default Cell;