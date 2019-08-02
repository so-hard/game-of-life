import  Board from './../js/board'

let board = new Board(),
    testList = [];

board.init({
    x: 3,
    y: 3
});

board.gridInit([1,1,0,1,1,0,0,0])

testList.push({
    methodName: "getNeighborIndex",
    desCript: "test center cell neiborIndex",
    param:[1,1],
    expectData: [0,1,2,3,5,6,7,8]
})

testList.push({
    methodName: "getNeighborIndex",
    desCript: "test [0，0] cell neiborIndex",
    param:[0,0],
    expectData: [1,3,4]
})

testList.push({
    methodName: "getNeighborIndex",
    desCript: "test [2，2] cell neiborIndex",
    param:[2,2],
    expectData: [4,5,7]
})

testList.push({
    methodName: "updateCells",
    desCript: "test the status after cell`s status update",
    param: [],
    testData: board.statusList,
    expectData: [1,1,0,1,1,0,0,0]
})



testList.forEach((val)=> {
    test(val.desCript,()=> {
        let testData;
        if(val.testData ){
            board[val.methodName]()
            testData = val.testData
        }else{
            testData = board[val.methodName](...val.param)
        }
        expect(testData).toEqual(val.expectData)
    })
})


