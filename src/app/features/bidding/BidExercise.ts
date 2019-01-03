import { Hand } from "./Hand";

interface instruction {
    label: string;
    subPart?: string;
}
export class BidExercise {
    id: number = 0 ;
    instructions: instruction[];
    solution: string = "";
    hands?: Hand[];
}