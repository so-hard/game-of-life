class Control {
  constructor(data) {
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
    this.inputs = control.getElementsByTagName('input');
    this.startBut = control.getElementsByClassName('start_but')[0];
    this.resetBut = control.getElementsByClassName('reset_but')[0];
    this.waring = control.getElementsByClassName('warning')[0];
    this.control = control;
    console.log(this.control)
  }
  //返回属性
  returnData() {
    if (this.checkoutData()) {
      this.init()
    }
    this.checkoutData(this.gridData)
    return [this.inputs, this.startBut, this.resetBut, this.control,this.gridData]
  }

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
  returnGridData(data) {
    console.log(data)
    let inputs = new Set(this.inputs);
    inputs.forEach((val) => {
      if(data == ''){
        val.value = data
      }else{
        this.gridData.push(val.value)
      }
    });
   console.log(this.gridData)
  }

  startAction() {
    this.startBut.addEventListener('click', function(){
      this.returnGridData()
      // console,log(this.resetBut)
    }.bind(this))
  }

  resetAction() {
    this.resetBut.addEventListener('click',function(){
      this.returnGridData('')
      this.gridData = []
    }.bind(this))
  }
  // controlAciton() {
  //   window.addEventListener('mousewheel', this.debounce(event,this.control,this.controlAciton))
  // }
  

  

}

export default Control