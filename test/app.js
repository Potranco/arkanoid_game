var expect = require('chai').expect
var createCanvas = require('canvas').createCanvas
var App = require('../src/js/app.js')

describe('App arkanoid Game', function () {
  it('Loaded', function () {
    let app = new App(createCanvas(200, 200))
    expect(typeof app).to.not.equal('undefined')
  })
})
