export class Tile {
    constructor(gridElement) {
        this.tileElement = document.createElement('div')
        this.setValue(Math.random() > 0.5 ? 2 : 4)
        this.tileElement.classList.add('tile', `tile-${this.value}`)
        gridElement.append(this.tileElement)
}

setXY(x, y) {
    this.x = x
    this.y = y
    this.tileElement.style.setProperty('--x', x)
    this.tileElement.style.setProperty('--y', y)
}

setValue(value) {
    this.value = value
    this.tileElement.textContent = this.value
}
}