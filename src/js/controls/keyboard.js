
import Document from 'html-document'

class Keyboard {
  constructor () {
    this.lastKey = null
    this.keyspress = {}
    // refactor -> search new option for detect node or window
    let root = (typeof document === 'undefined') ? new Document() : document
    root.addEventListener('keydown', this.onkeydown.bind(this))
    root.addEventListener('keyup', this.onkeyup.bind(this))
  }

  onkeydown (event) {
    this.lastKey = event.which
    this.keyspress[event.which] = true
  }

  onkeyup (event) {
    let key = event.which
    this.keyspress[key] = false
  }

  isKeyPress (key) {
    return !!this.keyspress[key]
  }

  lastKeyPress () {
    return this.lastKey
  }
}

export default new Keyboard()
