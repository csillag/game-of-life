import { LifeData } from './LifeData';

// A simple interface for storing coordinates
interface Coord {
    x: number;
    y: number;
}

// Naive implementation of the calculations for the cell automaton
// Returns the list of changed positions
export function getChanges(life: LifeData):Coord[] {
    // Let's cache these data
    const width = life.getSize();
    const height = life.getSize();

    // We will collects the pending changes here
    const changes:Coord[] = [];

    // Declare variables that will be used for counting
    let friends:number; // The number of neighbors of a cell
    let min_x:number;
    let max_x:number;
    let min_y:number;
    let max_y:number;
    let populated:boolean;

    const space:boolean[][] = life.getMap();

    // Go over all the cells
    for (let x = 0; x < width; x++) {
        // Determine the cols we have to look at for neighbors
        min_x = (x > 0) ? x-1 : 0;
        max_x = (x < width-1) ? x+1 : x;
        for (let y = 0; y < height; y++) {
            // Determine the rows we have to look at for neighbors
            min_y = (y > 0) ? y-1 : 0;
            max_y = (y < height-1) ? y+1 : y;

            // Is this cell current populated?
            populated = space[x][y];

            // Count the neighbors within this area
            let friends = 0;
            for (let nx = min_x; nx <= max_x; nx++) {
                for (let ny = min_y; ny <= max_y; ny++) {
                    if ((nx != x) || (ny != y)) { // Isn't this the same cell
                        if (space[nx][ny]) {
                            friends += 1;
                        }
                    }
                }
            }

            // OK, now we have all the data, let's make
            // some decisions! The rules are:
            //
            // Each cell with one or no neighbors dies,
            //     as if by solitude.
            // Each cell with four or more neighbors dies,
            //     as if by overpopulation.
            // Each cell with three neighbors becomes populated.
            if (
                (populated && ((friends <= 1) || (friends >= 4))) ||
                (!populated && (friends == 3))
            ) {
                changes.push({x, y});
            }
        }
    }

    return changes;
}
