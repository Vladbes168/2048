//* Import

import { Grid } from "./grid";
import { Tile } from "./tile";


const gameBoard = document.querySelector('.grid');
const grid = new Grid(gameBoard)
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard))
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard))
setupInputOnce()




//* Functions

function setupInputOnce() {
    window.addEventListener('keydown', handleInput, {once: true})
}

function handleInput(event) {
    switch (event.key) {
        case 'ArrowUp':
            moveUp()
        break;
        case 'ArrowDown':
        break;
        case 'ArrowLeft':
        break;
        case 'ArrowRight':
        break;
        

        default:
        setupInputOnce();
        return
    }
    setupInputOnce()
}


function moveUp() {
    slideTiles(grid.cellsGroupedByColumn)
}

function slideTiles(groupedCells) {
groupedCells.forEach(group => slidetilesIngroup(group));

}

function slidetilesIngroup(group) {
for(let i = 1; i < group.length; i++) {
    if(group[i].isEmpty()) {
        continue;
    }

    const cellWithTile = group[i]
}
}
