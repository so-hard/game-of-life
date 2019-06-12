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

test('cell set alive', () => {
    cell.setAlive();
    expect(cell.status).toBe(1);
})

test('cell set dead', () => {
    cell.setDead();
    expect(cell.status).toBe(0);
})