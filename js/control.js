class Control {
  constructor(bord) {
    // 获取ControlDom
    this.ControlDom = document.getElementsByClassName('control')[0];
    // 每个组件
    this.ControlComponents = new Map();
    // inputs里面的数据
    this.inputDatas = {}
    //需要一个convas 画板
    this.bord = bord
    // 用来判断时候初始化 `board`
    this.isboaedInit = 0;
  }

  //初始化dom数据
  init() {
    this.setControlComponents('inputs')
    this.setControlComponents('startBut', 'start_but')
    this.setControlComponents('stopBut', 'reset_but')
    this.setControlComponents('stepBut', 'step_but')
    this.setControlComponents('layer')
    this.startAction()
    this.resetAciton()
    this.stepAction()
    // window.addEventListener('mousewheel',  event => {
    //   if (event.wheelDelta < 0) {
    //     this.ControlDom.setAttribute('id', "up")
    //     this.bord.canvas.setAttribute('id',"up")
    //   } else {
    //     if (this.ControlDom.getAttribute('id') == "up") {
    //       this.ControlDom.removeAttribute('id')
    //       this.bord.canvas.removeAttribute('id',"up")
    //     }
    //   }
    // })
  }

  //向map中添加dom
  setControlComponents(name, targ = name) {
    let targDom = this.ControlDom.getElementsByClassName(targ)[0];
    targDom = targDom.children.length > 1 ? targDom.children : targDom;
    this.ControlComponents.set(name, targDom)
  }

  getControlComponent(name) {
    return this.ControlComponents.get(name)
  }

  setInputDatas() {
    //获取input htmlColection,遍历得到key，
    let inputs = this.getControlComponent('inputs');
    for (const input of inputs) {
      let [key, value] = [input.name, Number(input.value)]
      this.inputDatas[key] = value
    }
  }

  // 检查表单数据
  checkInputData() {
    let {
      x,
      y,
      liveCellNums
    } = this.inputDatas
    if (x * y < liveCellNums) {
      console.log(`the livenum is over`)
    }
  }

  resetAciton() {
    let resetBut = this.getControlComponent('stopBut');
    let startBut = this.getControlComponent('startBut');
    resetBut.addEventListener('click', () => {
      startBut.innerHTML = "start"
      this.isboaedInit = 0
      this.bord.reset()
    })
  }

  startAction() {
    let startBut = this.getControlComponent('startBut');
    startBut.addEventListener('click', () => {
      if (startBut.innerHTML === "start") {
        startBut.innerHTML = "pause"
        if (this.isboaedInit == 0) {
          this.isboaedInit += 1
          this.setInputDatas()
          this.bord.init(this.inputDatas)
        }
        this.bord.startAnimation()
      } else {
        startBut.innerHTML = "start"
        this.bord.stopAnimation()
      }
    })
  }

  stepAction(){
    let stepBut = this.getControlComponent('stepBut');
    let startBut = this.getControlComponent('startBut');

    stepBut.addEventListener('click', ()=> {
      this.bord.setp()
      startBut.innerHTML = "start"
    })
  }

}

export default Control