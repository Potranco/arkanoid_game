import Brick from './Brick.js'
import config from './config.js'

export default class ListBricks {
  constructor (ctx) {
    let {rows, columns} = config.bricks
    this.ctx = ctx
    this.rows = rows
    this.columns = columns
    this.bricks = []
    this.score = 0
    this.loadBricks()
  }

  loadBricks () {
    let {width, height, padding, offSetTop, offSetLeft} = config.bricks
    for (let i = 0; i < this.rows; i++) {
      this.bricks[i] = []
      for (let t = 0; t < this.columns; t++) {
        let x = (i * (width + padding)) + offSetLeft
        let y = (t * (height + padding)) + offSetTop
        this.bricks[i][t] = new Brick(x, y, this.ctx)
      }
    }
    return this
  }

  draw () {
    for (let i = 0; i < this.rows; i++) {
      for (let t = 0; t < this.columns; t++) {
        this.bricks[i][t].draw()
      }
    }
    return this
  }

  action (element, callback) {
    for (let i = 0; i < this.rows; i++) {
      for (let t = 0; t < this.columns; t++) {
        if (this.bricks[i][t].display && element.collision(this.bricks[i][t])) {
          this.bricks[i][t].action(false)
          callback()
        }
      }
    }
    return this
  }
}
