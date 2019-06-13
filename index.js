import Board from "./js/board"
import Control from "./js/control"


import './css/index.css'

let control = new Control()
let board = new Board()
const data = []
control.init()


control.startAction().then((gridDate)=> {
  console.log(gridDate)
  board.dataInit(gridDate)
  board.grid_init()
  board.draw()
})



// board.dataInit()

// board.startAnmation()

// control.startAction()
// control.resetAction()






window.addEventListener('mousewheel', function(event){
  if(event.wheelDelta < 0){
    this.control.setAttribute('id', "control_up")
}else {
  if (this.control.getAttribute('id') == "control_up") {
    this.control.removeAttribute('id')
  }
}
}.bind(control)) 

