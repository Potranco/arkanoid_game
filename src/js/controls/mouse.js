import Document from 'html-document'

class Mouse {
  addEvent (eventName, callback) {
    let root = (typeof document === 'undefined') ? new Document() : document
    root.addEventListener(eventName, callback)
    return this
  }

  removeEvent (eventName, callback) {
    let root = (typeof document === 'undefined') ? new Document() : document
    root.removeEventListener(eventName, callback)
    return this
  }
}

export default new Mouse()
