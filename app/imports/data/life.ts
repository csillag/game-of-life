// Top-level wrapper for accessing the state of life in the gama

import { Session } from 'meteor/session';

import { LifeData } from './LifeData';
import { addGlider } from './util';
import { getChanges } from './engine';

class LifeDataSessionStore implements LifeData {

    protected sizeKey = "life-size";
    
    public getSize() {
        return Session.get(this.sizeKey);
    }

    public setSize(value:number) {
        Session.set(this.sizeKey, value);
    }

    protected getKey(x:number, y:number):string {
        return "life-cell-" + x + "-" + y;
    }
    
    public isPopulated(x:number, y:number):boolean {
        return !!Session.get(this.getKey(x, y));
    }

    public getMap():boolean[][] {
        const map:boolean[][] = [];
        const size = this.getSize();
        let col:boolean[] = null;
        for (let x = 0; x < size; x++) {
            col = [];
            for (let y = 0; y < size; y++) {
                col.push(this.isPopulated(x,y));
            }
            map.push(col);
        }
        return map;
    }

    public setPopulated(x:number, y:number, populated:boolean) {
        Session.set(this.getKey(x, y), populated);
    }
    
    public switchPopulated(x:number, y:number) {
        const key = this.getKey(x, y);
        Session.set(key, !Session.get(key));
    }

    public clear() {
        const size = this.getSize();
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                this.setPopulated(x, y, false);
            }
        }
    }

    public reset() {
        this.clear();
        addGlider(this, 1, 1);
    }

    public evolve() {
        getChanges(this).forEach((pos) => {
            this.switchPopulated(pos.x, pos.y);
        });
    }

    constructor(size: number, reset?: boolean) {
        this.setSize(size);
        if (reset) {
            this.clear();
        }
    }
}

export function getLife():LifeData {
    const life = new LifeDataSessionStore(10);
    life.reset();
    return life;
}
