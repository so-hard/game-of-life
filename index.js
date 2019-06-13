import Board from "./js/board"
import Control from "./js/control"


import './css/index.css'



const GridArray = [50, 50,400,20]

let board = new Board(GridArray)
let control = new Control()
board.dataInit()
board.grid_init()
board.draw()
setInterval(
  () => {
    board.update()
  }
  , 50
)

control.init()
control.startAction()
control.resetAction()






window.addEventListener('mousewheel', function(event){
  if(event.wheelDelta < 0){
    this.control.setAttribute('id', "control_up")
}else {
  if (this.control.getAttribute('id') == "control_up") {
    this.control.removeAttribute('id')
  }
}
}.bind(control)) 

