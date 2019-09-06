import App from './app.js'

window.onload = function () {
  window.app = new App(document.getElementById('Canvas_1'))
  window.app.onload()
}
