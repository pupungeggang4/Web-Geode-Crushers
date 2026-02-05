class SceneTitle {
    constructor(game) {

    }

    loop(game) {
        this.render(game)
    }

    render(game) {
        let canvas = game.canvas
        let ctx = game.ctx
        Render.clearCanvas(canvas, ctx)
        Render.fillCanvas(canvas, ctx)
    }

    mouseDown(game, pos, button) {

    }

    mouseUp(game, pos, button) {

    }

    keyDown(game, key) {

    }

    keyUp(game, key) {

    }
}
