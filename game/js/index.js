import { Grid } from "./grid";
import { Tile } from "./tile";


const gameBoard = document.querySelector('.grid');

const grid = new Grid(gameBoard)
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard))
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard))
