import { Hand } from "./Hand";

interface instruction {
    label: string;
    subPart?: string;
}
export class BidExercise {
    id: number = 0 ;
    name: string = "";
    instructions: instruction[];
    solution: string = "";
    completion?: boolean = false;
    hands?: Hand[];
}