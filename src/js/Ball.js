
export default class Ball {
  constructor (canvas, ctx) {
    this.ctx = ctx
    this.canvas = canvas
    this.color = '#0095DD'
    this.radius = 10
    this.x = this.canvas.width / 2
    this.y = this.canvas.height - 30
    this.move = {
      x: 2,
      y: -2
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
}
