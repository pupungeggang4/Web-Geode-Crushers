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
        this.scene = new SceneTitle(this)
        Render.init(this.ctx)
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.frameCurrent = performance.now()
        this.delta = this.frameCurrent - this.framePrevious
        this.framePrevious = this.frameCurrent
        this.scene.loop(this)
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    mouseUp(event) {
        let targetRect = this.canvas.getBoundingClientRect()
        let pos = {
            x: (event.clientX - targetRect.left) / targetRect.width * this.canvas.width,
            y: (event.clientY - targetRect.top) / targetRect.height * this.canvas.height
        }
        let button = event.button

        this.scene.mouseUp(this, pos, button)
    }

    mouseDown(event) {
        let targetRect = this.canvas.getBoundingClientRect()
        let pos = {
            x: (event.clientX - targetRect.left) / targetRect.width * this.canvas.width,
            y: (event.clientY - targetRect.top) / targetRect.height * this.canvas.height
        }
        let button = event.button

        this.scene.mouseDown(this, pos, button)
    }

    keyDown(event) {
        let key = event.key
        this.scene.keyDown(this, key)
    }

    keyUp(event) {
        let key = event.key
        this.scene.keyUp(this, key)
    }
}
