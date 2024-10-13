

export class Cell {
    constructor(gridElement, x, y, currentScore) {
        const cell = document.createElement('div');
        cell.classList.add('grid__cell')
        gridElement.append(cell)
        this.x = x;
        this.y = y;
        this.currentScore = currentScore
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
    unlinkTileForMerge() {
        this.linkTileForMerge = null
    }

    mergeTiles() {
        this.linkedTile.setValue(this.linkedTile.value + this.linkedTile.value)
        
        this.linkedTile.setCurrentScore(this.currentScore, this.linkedTile.value)
        
        
        
        this.linkedTileForMerge.removeFromDOM()
        this.unlinkTileForMerge()
    }
}