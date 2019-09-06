
class draw {
  constructor (canvas, ctx, callback) {
    this.canvas = canvas
    this.ctx = ctx
    this.callback = callback
  }

  clear () {
    let {canvas, ctx} = this
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    return this
  }

  paint () {
    this.clear()
    this.callback()
    return this
  }
}

export default draw
