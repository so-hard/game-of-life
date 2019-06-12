import Cell from "../js/cell.js"
let cell = new Cell(0, 0, 0);
let obj = {
    status:0,
    x:0,
    y:0,
}

test('cell init', () => {
    expect(cell).toEqual(obj);
});