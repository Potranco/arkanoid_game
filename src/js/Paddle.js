import config from './config.js'
let {width, height, color, move} = config.paddle

export default class Ball {
  constructor (canvas, ctx, initWidth = width, initHeight = height, initColor = color, x = move.x, y = move.y) {
    this.ctx = ctx
    this.canvas = canvas
    this.width = initWidth
    this.height = initHeight
    this.x = (this.canvas.width - this.width) / 2
    this.y = this.canvas.height - 30
    this.color = initColor

    this.move = {
      x: x,
      y: y,
      left: false,
      right: false
    }
  }

  draw () {
    let {ctx} = this
    this.x = this.move.left ? (this.x - this.move.x) : (this.x + this.move.x)
    this.x = this.move.right ? (this.x + this.move.x) : (this.x - this.move.x)
    if (this.x < 0) this.x = 0
    if (this.x + this.width > this.canvas.width) this.x = this.canvas.width - this.width
    ctx.beginPath()
    ctx.rect(this.x, this.y, this.width, this.height)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
    return this
  }

  collision (element) {
    if ((this.x > element.x && this.x < element.x + element.width) &&
    (this.y > element.y && this.y < element.y + element.height)) {
      return true
    }
    return false
  }
  moveToLeft (value) {
    this.move.left = !!value
    return this
  }
  moveToRight (value) {
    this.move.right = !!value
    return this
  }
}
