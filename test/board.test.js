import Cell from "../js/cell"
import Board from "../js/board"

let board = new Board();
let data = [3,3, 1,20];
let obj = {
    x:3,
    y:3,
    grid: [],
    liveNum : 1,
    rebaseWidth:20,

};
let cell = new Cell(0, 0, 0);
board.dataInit(data)

test('board create', () => {
    expect(board).toEqual(obj);
});

test('board init', () => {

    board.grid_init();
    expect(board.grid.length).toBe(3);
});

test('board update1', () => {
    let old_state = [1,0,1,1,0,1,0,1,0]
    let next_state = [0,0,0,1,0,1,0,1,0]
    let k = 0
    for (let i = 0; i < 3; i++) {
        board.grid[i] = []
        for (let j = 0; j < 3; j++) {
            board.grid[i][j] = new Cell(old_state[k++], i, j)
        }
    }
    let except_update_grid = []
    let k2 = 0
    for (let i = 0; i < 3; i++) {
        except_update_grid[i] = []
        for (let j = 0; j < 3; j++) {
            except_update_grid[i][j] = new Cell(next_state[k2++], i, j)
        }
    }
    board.update()
    expect(board.grid).toEqual(except_update_grid);
})


test('board update2', () => {
    let old_state = [1,0,1,1,0,1,1,1,0]
    let next_state = [0,0,0,1,0,1,1,1,0]
    let k = 0
    for (let i = 0; i < 3; i++) {
        board.grid[i] = []
        for (let j = 0; j < 3; j++) {
            board.grid[i][j] = new Cell(old_state[k++], i, j)
        }
    }
    let except_update_grid = []
    let k2 = 0
    for (let i = 0; i < 3; i++) {
        except_update_grid[i] = []
        for (let j = 0; j < 3; j++) {
            except_update_grid[i][j] = new Cell(next_state[k2++], i, j)
        }
    }
    board.update()
    expect(board.grid).toEqual(except_update_grid);
})

test('board update3', () => {
    let old_state = [0,1,1,0,1,0,0,1,1]
    let next_state = [0,1,1,1,0,0,0,1,1]
    let k = 0
    for (let i = 0; i < 3; i++) {
        board.grid[i] = []
        for (let j = 0; j < 3; j++) {
            board.grid[i][j] = new Cell(old_state[k++], i, j)
        }
    }
    let except_update_grid = []
    let k2 = 0
    for (let i = 0; i < 3; i++) {
        except_update_grid[i] = []
        for (let j = 0; j < 3; j++) {
            except_update_grid[i][j] = new Cell(next_state[k2++], i, j)
        }
    }
    board.update()

    expect(board.grid).toEqual(except_update_grid);
})

test('board update4', () => {
    let old_state = [0,1,1,1,0,0,0,1,1]
    let next_state = [0,1,0,1,0,0,0,1,0]
    let k = 0
    for (let i = 0; i < 3; i++) {
        board.grid[i] = []
        for (let j = 0; j < 3; j++) {
            board.grid[i][j] = new Cell(old_state[k++], i, j)
        }
    }
    let except_update_grid = []
    let k2 = 0
    for (let i = 0; i < 3; i++) {
        except_update_grid[i] = []
        for (let j = 0; j < 3; j++) {
            except_update_grid[i][j] = new Cell(next_state[k2++], i, j)
        }
    }
    board.update()

    expect(board.grid).toEqual(except_update_grid);
})

test('board update5', () => {
    let old_state = [0,1,0,1,0,0,0,1,0]
    let next_state = [0,0,0,1,1,0,0,0,0]
    let k = 0
    for (let i = 0; i < 3; i++) {
        board.grid[i] = []
        for (let j = 0; j < 3; j++) {
            board.grid[i][j] = new Cell(old_state[k++], i, j)
        }
    }
    let except_update_grid = []
    let k2 = 0
    for (let i = 0; i < 3; i++) {
        except_update_grid[i] = []
        for (let j = 0; j < 3; j++) {
            except_update_grid[i][j] = new Cell(next_state[k2++], i, j)
        }
    }
    board.update()

    expect(board.grid).toEqual(except_update_grid);
})

test('board update5', () => {
    let old_state = [0,0,0,1,1,0,0,0,0]
    let next_state = [0,0,0,0,0,0,0,0,0]
    let k = 0
    for (let i = 0; i < 3; i++) {
        board.grid[i] = []
        for (let j = 0; j < 3; j++) {
            board.grid[i][j] = new Cell(old_state[k++], i, j)
        }
    }
    let except_update_grid = []
    let k2 = 0
    for (let i = 0; i < 3; i++) {
        except_update_grid[i] = []
        for (let j = 0; j < 3; j++) {
            except_update_grid[i][j] = new Cell(next_state[k2++], i, j)
        }
    }
    board.update()

    expect(board.grid).toEqual(except_update_grid);
})