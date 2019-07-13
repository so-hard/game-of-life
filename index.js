import Board from "./js/board"
import Control from "./js/control"
import './css/index.styl'


let control = new Control()
let board = new Board()

control.init()
control.startAction(board.start())
control.resetAction(board.reset())



// setInterval(
//   ()=> {
//     board.update()
//   },500
// )



// control.resetAction()


// board.dataInit()

// board.startAnmation()

// control.startAction()






window.addEventListener('mousewheel', function(event){
  if(event.wheelDelta < 0){
    this.control.setAttribute('id', "control_up")
}else {
  if (this.control.getAttribute('id') == "control_up") {
    this.control.removeAttribute('id')
  }
}
}.bind(control)) 

