export default {
  game: {
    debug: false,
    font: '16px Arial',
    colorText: '#0095DD'
  },
  keyboard: {
    KEY_LEFT: 37,
    KEY_RIGHT: 39,
    KEY_ENTER: 13
  },
  bricks: {
    rows: 3,
    columns: 5,
    width: 75,
    height: 20,
    padding: 20,
    offSetTop: 30,
    offSetLeft: 30,
    color: '#0095DD'
  },
  ball: {
    color: '#0095DD',
    radius: 10,
    move: {
      x: 2,
      y: -2
    }
  },
  paddle: {
    width: 75,
    height: 10,
    color: '#0095DD',
    move: {
      x: 7,
      y: 0
    }
  }
}
