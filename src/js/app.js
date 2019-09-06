
import GameLoop from './GameLoop.js'
import Ball from './Ball.js'
import Paddle from './Paddle.js'
import keyboard from './controls/keyboard.js'
import config from './config.js'
import ListBricks from './ListBricks.js'

const KEY_LEFT = config.keyboard.KEY_LEFT
const KEY_RIGHT = config.keyboard.KEY_RIGHT
const KEY_ENTER = config.keyboard.KEY_ENTER

export class App {
  constructor (canvas) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.ball = new Ball(this.canvas, this.ctx)
    this.player = new Paddle(this.canvas, this.ctx)
    this.bricks = new ListBricks(this.ctx)
    this.loop = null
  }

  onload () {
    this.loop = new GameLoop(this.actions.bind(this), this.paint.bind(this))
    return this
  }

  paint () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.bricks.draw()
    this.ball.draw()
    this.player.draw()
    return this
  }

  actions () {
    let {ball, player, bricks} = this
    ball.action(this.endGame.bind(this))
    if (ball.collision(player) || player.collision(ball)) ball.move.y = -ball.move.y
    bricks.action(ball, () => { ball.move.y = -ball.move.y })
    player.move.left = keyboard.isKeyPress(KEY_LEFT)
    player.move.right = keyboard.isKeyPress(KEY_RIGHT)

    if (keyboard.isKeyPress(KEY_ENTER)) this.pause()

    return this
  }

  endGame () {
    console.log('End game')
    return this
  }

  pause () {
    console.log('STOP')
    return this
  }
}

module.exports = App
