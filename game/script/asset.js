class Img {
    static loadPair = []
    static data = {}
}

class Aud {
    static loadPair = []
    static data = {}
}

class AssetLoader {
    static numAssets = 0
    static numLoaded = 0
    static done = false
    static loadAssets(callback) {
        AssetLoader.numAssets = Img.loadPair.length + Aud.loadPair.length
        AssetLoader.numLoaded = 0
        AssetLoader.done = false
        const checkDone = () => {
            AssetLoader.numLoaded++
            if (AssetLoader.numLoaded >= AssetLoader.numAssets && AssetLoader.done === false) {
                AssetLoader.done = true
                callback()
            }
        }
        if (AssetLoader.numAssets === 0) {
            callback()
        } else {
            for (let i = 0; i < Img.loadPair.length; i++) {
                let pair = Img.loadPair[i]
                let img = new Image()
                Img.data[pair[0]] = img
                img.onload = img.onerror = checkDone
                img.src = pair[1]
            }
            for (let i = 0; i < Aud.loadPair.length; i++) {
                let pair = Aud.loadPair[i]
                let aud = new Audio()
                aud.preload = 'auto'
                Aud.data[pair[0]] = aud
                aud.onloadeddata = aud.onerror = checkDone
                aud.src = pair[1]
            }
        }
    }
}
