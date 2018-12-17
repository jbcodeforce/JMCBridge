import { BidExercise } from './BidExercise';

export class BidLesson {
    id: string = "";
    name: string = "";
    completion: number = 0;
    currentExercise: number = 0;
    total: number  = 1;
    exercises?: BidExercise[];
}