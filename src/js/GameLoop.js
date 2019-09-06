import config from './config.js'

export default class Game {
  constructor (actions, draw) {
    this.aps = 0 // actualizaciones por segundo
    this.fps = 0
    this.bucle = 0
    this.debug = config.game.debug || false
    this.actionCallback = actions || false
    this.drawCallBack = draw || false
    this.time = 0
    this.loop()
  }

  loop (timeLap) {
    this.time = window.requestAnimationFrame(this.loop.bind(this))
    this.refresh()
    this.draw()

    if ((timeLap - this.bucle) > 999) {
      this.bucle = timeLap
      this.debug && console.log('aps:', this.aps, 'fps:', this.fps)
      this.aps = 0
      this.fps = 0
    }
  }

  stop () {
    console.log('stop')
  }

  play () {
    console.log('play')
  }

  refresh () {
    this.aps++
    return this.actionCallback && this.actionCallback()
  }

  draw () {
    this.fps++
    return this.drawCallBack && this.drawCallBack()
  }
}
