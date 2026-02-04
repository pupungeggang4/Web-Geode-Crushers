class Game {
    constructor() {
        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')

        this.state = ''
        this.menu = false

        this.canvas.addEventListener('mousedown', (event) => this.mouseDown(event), false)
        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)
        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)
    }

    run() {
        this.frameCurrent = 0
        this.framePrevious = 0
        this.delta = 0
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    mouseUp(event) {

    }

    mouseDown(event) {

    }

    keyDown(event) {

    }

    keyUp(event) {

    }
}
