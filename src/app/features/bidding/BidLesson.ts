import { BidExercise } from './BidExercise';

export class BidLesson {
    id: string = "";
    name: string = "";
    completion: number = 0;
    currentExercise: number = 0;
    nbExercices: number  = 1;
    exercises?: BidExercise[];
}