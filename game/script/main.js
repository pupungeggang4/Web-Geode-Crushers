window.addEventListener("DOMContentLoaded", main)
window.onerror = errorHandle

let game

function main() {
    const canvas = document.getElementById('screen')
    if (canvas)
        canvas.oncontextmenu = e => e.preventDefault()
    AssetLoader.loadAssets(() => {
        queueMicrotask(() => {
            game = new Game()
            game.run()
        })
    })
}

function errorHandle(msg, url, line, col, err) {
    if (game?.gameLoop) {
        cancelAnimationFrame(game.gameLoop)
    }
}
