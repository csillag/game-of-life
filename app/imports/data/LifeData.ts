
export interface LifeData {
    getSize():number;
    setSize(value:number):void;
    isPopulated(x:number,y:number):boolean;
    getMap():boolean[][];
    setPopulated(x:number,y:number,value:boolean):void;    
    switchPopulated(x:number,y:number):void;
    clear():void;
    reset():void;
    evolve():void;
}
