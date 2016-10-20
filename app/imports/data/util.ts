// Utility functions, dealing with the data for the cell grid

import { LifeData } from './LifeData';

// Draw the "glider" pattern at the grid
export function addGlider(life:LifeData, x:number, y:number) {
    life.switchPopulated(x+0 ,y+2);
    life.switchPopulated(x+1, y+2);
    life.switchPopulated(x+2, y+2);
    life.switchPopulated(x+2, y+1);
    life.switchPopulated(x+1, y+0);
}

