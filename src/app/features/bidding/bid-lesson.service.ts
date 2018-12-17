import { Injectable } from '@angular/core';
import { Hand } from './Hand';
import { Card } from './Card';
import { BidLesson } from './BidLesson';

@Injectable({
  providedIn: 'root'
})
export class BidLessonService {
  lessonCategoryName: string;
  currentLesson: BidLesson;

  constructor() { }

  setLessonCategoryName(l:string){
    this.lessonCategoryName = l;
  }
  getLessonCategoryName(){
    return  this.lessonCategoryName;
  }

  dataLessons = [{id: "o1", name: "1 opening", total:1, completion: 0, currentExercise: 0,
      exercises: [{id:1,
      instructions: [{ label:'Count your evaluation points before your first bid.', subPart:'A -> 4H; K -> 3H; Q -> 2H; J -> 1H'},
        { label:'Count your HD',subPart:'16 H'}], 
      solution: "1C", hand: {position: "South", 
      cards: [
      {name: "A-of-CLUBS" ,Hpoint: 4},
      {name: "K-of-CLUBS", Hpoint: 3},
      {name: "T-of-CLUBS", Hpoint: 0},
      {name: "8-of-CLUBS", Hpoint: 0},
      {name: "4-of-CLUBS", Hpoint: 0},
      {name: "8-of-DIAMONDS", Hpoint: 0},
      {name: "7-of-DIAMONDS", Hpoint: 0},
      {name: "4-of-DIAMONDS", Hpoint: 0},
      {name: "A-of-HEARTS", Hpoint: 4},
      {name: "K-of-HEARTS", Hpoint: 3},
      {name: "J-of-HEARTS", Hpoint: 1},
      {name: "A-of-SPADES", Hpoint: 4},
      {name: "T-of-SPADES", Hpoint: 0}]}}]
    },
    {id: "o2", name: "2 opening", total:1, completion: 0, currentExercise: 0},
    {id: "o3", name: "Barrage", total:1,  completion: 1, currentExercise: 5}];

  getLessonList(): BidLesson[] {
    // got to backend to get these using the user and category name
   
    return this.dataLessons;
  }

  getCurrentLesson(){
    if (this.currentLesson === undefined) {
      this.currentLesson= this.dataLessons[0];
    }
    return this.currentLesson;
  }

  setBidLesson(lesson: BidLesson) {
    this.currentLesson = lesson;
  }
}
