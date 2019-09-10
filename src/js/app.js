
import GameLoop from './GameLoop.js'
import Ball from './Ball.js'
import Paddle from './Paddle.js'
import ListBricks from './ListBricks.js'
import keyboard from './controls/keyboard.js'
import mouse from './controls/mouse.js'
import config from './config.js'

const KEY_LEFT = config.keyboard.KEY_LEFT
const KEY_RIGHT = config.keyboard.KEY_RIGHT
const KEY_ENTER = config.keyboard.KEY_ENTER

export class App {
  constructor (canvas) {
    this.loop = null
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.load()
    mouse.addEvent('mousemove', this.handlerMouseMove.bind(this))
  }

  load () {
    this.ball = new Ball(this.canvas, this.ctx)
    this.player = new Paddle(this.canvas, this.ctx)
    this.bricks = new ListBricks(this.ctx)
    this.score = 0
    this.lives = 3
    this.onload()
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

    // Score & lives
    this.ctx.font = config.game.font
    this.ctx.fillStyle = config.game.colorText
    this.ctx.fillText('Score: ' + this.score, 8, 20)
    this.ctx.fillText('Lives: ' + this.lives, this.canvas.width - 65, 20)

    return this
  }

  actions () {
    let {ball, player, bricks} = this
    ball.action(this.endGame.bind(this))
    if (ball.collision(player) || player.collision(ball)) ball.changeDirectionY()
    bricks.action(ball, () => {
      this.score++
      ball.changeDirectionY()
      if (this.score >= bricks.countBrick()) console.log('WIN!!!!')
    })
    player
      .moveToLeft(keyboard.isKeyPress(KEY_LEFT))
      .moveToRight(keyboard.isKeyPress(KEY_RIGHT))

    if (keyboard.isKeyPress(KEY_ENTER)) this.pause()

    return this
  }

  endGame () {
    this.lives--
    if (this.lives < 1) {
      window.alert('GAME OVER')
      this.load()
    }
    return this
  }

  pause () {
    console.log('STOP')
    return this
  }

  handlerMouseMove (event) {
    let relativeX = event.clientX - this.canvas.offsetLeft
    if (relativeX > 0 && relativeX < this.canvas.width) {
      this.player.x = relativeX - this.player.width / 2
    }
  }
}

module.exports = App
