import { BidExercise } from './BidExercise';
import { Tutorial } from '../tutorial-reader/Tutorial';

export class BidLesson {
    id: string = "";
    name: string = "";
    completion: number = 0;
    currentExercise: number = 0;
    tutorials?: Tutorial[]; 
    exercises?: BidExercise[];
}