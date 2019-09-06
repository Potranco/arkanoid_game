import config from './config.js'
export default class Brick {
  constructor (x, y, ctx) {
    let { width, height, padding, offSetTop, offSetLeft } = config.bricks
    this.ctx = ctx
    this.width = width
    this.height = height
    this.padding = padding
    this.offSetTop = offSetTop
    this.offSetLeft = offSetLeft
    this.color = '#0095DD'
    this.x = x
    this.y = y
    this.display = true
  }

  draw () {
    if (!this.display) return this
    this.ctx.beginPath()
    this.ctx.rect(this.x, this.y, this.width, this.height)
    this.ctx.fillStyle = this.color
    this.ctx.fill()
    this.ctx.closePath()
    return this
  }

  action (display) {
    this.display = display
    return this
  }
}
