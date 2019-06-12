import Board from "./js/board"
const GridArray = [50,50]

let board  = new Board (GridArray,400)

board.grid_init()
board.draw()
setInterval(
  () =>{
    board.update()
  }
  ,50
)