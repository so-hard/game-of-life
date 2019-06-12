let canvas = document.getElementById("canvas"),
cxt = canvas.getContext("2d");
const rebaseWidth = 20;
const GridArray = [10,10]


function createGrid(array) {
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

createGrid(GridArray);

