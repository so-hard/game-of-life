import _ from 'lodash/core'
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
    this.startBut = control.getElementsByClassName('start_but')[0];
    this.resetBut = control.getElementsByClassName('reset_but')[0];
    this.waring = control.getElementsByClassName('warning')[0];
    this.control = control;
    console.log(this.control)
  }

  //初始化 warning组件
  // waringInit() {
  //   let waringOut = this.waring.getElementsByTagName('span')[0];
  //   waringOut.onclick = () => {
  //     this.waring.removeAttribute('id')
  //   }
  // }
  //检查表单数据
  checkoutData(data = 0) {
    switch (data == 0) {
      case true:
        if (this.inputs == null || this.startBut == null || this.resetBut == null || this.control == null) {
          return 0
        }
        break;
      case false:
        console.log(data)
        if (data.length == 0) {
          retrun
        }
        data.forEach(
          val => {
            if (val == '') {
              console.log(this.waring)
              this.waring.setAttribute('id', 'warning');
              this.waringInit()
            }
          }
        )
        break
    }
  }

  getInputs() {
    this.inputs = this.control.querySelectorAll('input')
  }
  resetGridData() {
    let inputs = Array.from(this.inputs);
    inputs.forEach((val) => {
      val.value = '';
    })
    return this.gridData = [0, 0, 0, 0]
  }


  //获取表单的数据
  getGridData() {
    let newGridData,
      reset;
    this.getInputs();
    newGridData = [...this.inputs].map((val) => {
      // 往数data里添加数据
      return val.value
    });
    //判断数据是否变化
    reset = !_.isEqual(newGridData, this.gridData)
    this.gridData = newGridData
    return {
      data: this.gridData,
      reset
    }
  }


/*
点击开始按钮获取按钮的文本


*/
  startAction(fun) {
    let signal;
    this.startBut.addEventListener('click', () => {
      signal = this.startBut.innerHTML
      this.startBut.innerHTML = this.startBut.innerHTML === "start" ? "pause" : "start"
      fun(this.getGridData(), signal)
    })
  }

  resetAction(fun) {
    this.resetBut.addEventListener('click', () => {
      this.startBut.innerHTML = "start"
      fun(this.resetGridData())
    })
  }


}

export default Control