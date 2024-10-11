

export class Cell {
    constructor(gridElement, x, y) {
        const cell = document.createElement('div');
        cell.classList.add('grid__cell')
        gridElement.append(cell)
        this.x = x;
        this.y = y;
    }

    linkTile(tile) {
        tile.setXY(this.x, this.y)
        this.linkedTile = tile
    }

    isEmpty() {
        return !this.linkedTile
    }

    linkTileForMerge(tile) {
        tile.setXY(this.x, this.y)
        this.linkedTileForMerge = tile
    }
    
    hasTileForMerge() {
        return !!this.linkedTileForMerge;
    }

    canAccept(newTile) {
        console.log(this.isEmpty() || (!this.hasTileForMerge() && this.linkedTile.value === newTile.value));
        
        return this.isEmpty() || (!this.hasTileForMerge() && this.linkedTile.value === newTile.value)
    }
    unlinkTile() {
        this.linkedTile = null
    }
}