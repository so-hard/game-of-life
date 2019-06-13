class Control {
  constructor() {
    this.inputs = null
    this.startBut = null
    this.resetBut = null
    this.control = null
    this.waring = null
    this.width = null
    this.gridData = []
    
  }

  init() {
    let control = document.getElementsByClassName('control')[0];
    this.inputs = control.querySelectorAll('input');
    this.startBut = control.getElementsByClassName('start_but')[0];
    this.resetBut = control.getElementsByClassName('reset_but')[0];
    this.waring = control.getElementsByClassName('warning')[0];
    this.control = control;
    console.log(this.control)
  }
  //返回属性
  // returnData() {
  //   if (this.checkoutData()) {
  //     this.init()
  //   }
  //   this.checkoutData(this.gridData)
  //   return [this.inputs, this.startBut, this.resetBut, this.control,this.gridData]
  // }

  //初始化 warning组件
  waringInit() {
    let waringOut = this.waring.getElementsByTagName('span')[0];
    waringOut.onclick = () =>{
      this.waring.removeAttribute('id',)
    }
  }
  //检查属性数据
  checkoutData(data = 0) {
    switch (data == 0) {
      case true:
        if(this.inputs == null || this.startBut == null || this.resetBut == null ||  this.control == null) {
          return 0
        }
        break;
      case false: 
        console.log(data)
        if(data.length == 0){
          retrun 
        }
        data.forEach(
          val => {
            if(val == ''){
              console.log(this.waring)
              this.waring.setAttribute('id','warning');
              this.waringInit()
            }
          }
        )
        break
    }
    
  }
  //防抖
  debounce(event,fn, wait = 800) {
    let timer = null;
    console.log(event)
    return function () {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn(event)
      }, 800)
    }
  }

    //获取表单的数据

  resetGridData(){
    let inputs = Array.from(this.inputs);
    inputs.forEach((val) => {
        val.value = '';
    })
    this.gridData = [0,0,0,0]
    // retrun this.gridData
  }

  getGridData(data) {
    // console.log(data)
    let inputs = Array.from(this.inputs);
    console.log(inputs)
    inputs.forEach((val) => {
        this.gridData.push(val.value)
    });
    return  this.gridData
  }

  startAction() {
    return new Promise ((res, rej)=> {
      this.startBut.addEventListener('click', function(){
        
        let gridData = this.getGridData()
        res(gridData)
      }.bind(this))
    }) 

  }

  resetAction() {
    return new Promise((res,rej) => {
      this.resetBut.addEventListener('click',
      () => {
        this.resetGridData();
        res([0,0,0,0])
      })
    })
      

  }

  
}

export default Control