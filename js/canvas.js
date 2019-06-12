import Cell from "./cell"
let canvas = document.getElementById("canvas"),
cxt = canvas.getContext("2d");

function createGrid(array,rebaseWidth = 20) {
  let [xGrid,yGrid] = array
  canvas.width = xGrid*rebaseWidth;
  canvas.height = yGrid*rebaseWidth;
  for (let i = 0; i < xGrid ; i++) {
    for (let j = 0; j <yGrid; j++) {
      cxt.fillStyle = "#000000";
      cxt.strokeRect(i*rebaseWidth, j*rebaseWidth, rebaseWidth, rebaseWidth);
    }
  }
}

export {createGrid}
