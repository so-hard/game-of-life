let canvas = document.getElementById("canvas"),
cxt = canvas.getContext("2d");
const rebaseWidth = 20;



createGrid();
function createGrid() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      cxt.fillStyle = "#000000";
      cxt.strokeRect(j * rebaseWidth, i * rebaseWidth, rebaseWidth, rebaseWidth);
    }
  }
}

