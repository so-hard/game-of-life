import Board from "./js/board"
import Control from "./js/control"


import './css/index.css'

let control = new Control()
let board = new Board()
const data = []
control.init()


control.startAction().then((gridData)=> {
  // console.log(gridData)
  board.dataInit(gridData)
  board.gridInit()
  board.draw()
  console.log(board.flag)
  if(board.flag == null ){
    board.startAnimation()
  }else{
    board.stopAnimation()
  }
})

control.resetAction()



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

