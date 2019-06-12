import Cell from "../js/cell"
import Board from "../js/board"

let board = new Board({n: 5, m: 5});

let obj = {
    size: {
        n: 5,
        m: 5
    },
    grid:NaN
};

let cell = new Cell(0, 0, 0);

test('board create', () => {
    expect(board).toEqual(obj);
});

test('board init', () => {
    board.grid_init();
    expect(board.grid.length).toBe(5);
});