import Board from "./js/board"
import Control from "./js/control"
import './css/index.styl'
let board = new Board()
let control = new Control(board)
control.init()
window.board = board

