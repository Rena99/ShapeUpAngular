import { Points } from "./Points";
import { Result } from "./Result";

export class Shapes {
    public id: number;
    public area: boolean;
    public unit: number;
    public points: Array<Points>;
    public result: Result;
    constructor() {
       this.result=new Result();
       this.points=new Array<Points>();
    }
}