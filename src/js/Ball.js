import config from './config.js'
let {color, radius, move} = config.ball

export default class Ball {
  constructor (canvas, ctx, initColor = color, initRadius = radius, x = move.x, y = move.y) {
    this.ctx = ctx
    this.canvas = canvas
    this.color = initColor
    this.radius = initRadius
    this.x = this.canvas.width / 2
    this.y = this.canvas.height - 30
    this.move = {
      x: x,
      y: y
    }
  }

  draw () {
    let {ctx} = this
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
    return this
  }

  action (callback) {
    if (this.y + this.move.y < this.radius) {
      this.move.y = -this.move.y
    } else if (this.y + this.move.y > this.canvas.height - this.radius) {
      this.move.y = -this.move.y
      callback()
    }

    if ((this.x + this.move.x < this.radius) || (this.x + this.move.x > this.canvas.width - this.radius)) {
      this.move.x = -this.move.x
    }

    this.x += this.move.x
    this.y += this.move.y
  }

  collision (element) {
    if ((this.x + this.radius > element.x && this.x + this.radius < element.x + element.width) &&
    (this.y + this.radius > element.y && this.y < element.y + element.height)) {
      return true
    }
    return false
  }

  changeDirectionY () {
    this.move.y = -this.move.y
    return this
  }

  changeDirectionX () {
    this.move.x = -this.move.x
    return this
  }
}
