import { Injectable } from '@angular/core';
import { Hand } from './Hand';
import { Card } from './Card';

@Injectable({
  providedIn: 'root'
})
export class BidLessonService {
  lessonName: string;

  constructor() { }

  setLessonName(l:string){
    this.lessonName = l;
  }

  getBiddingHand(): Hand {
    return {position: "South", cards: [
      {name: "A-of-CLUBS" ,Hpoint: 4},
      {name: "K-of-CLUBS", Hpoint: 3},
      {name: "T-of-CLUBS", Hpoint: 0},
      {name: "8-of-CLUBS", Hpoint: 0},
      {name: "4-of-CLUBS", Hpoint: 0},
      {name: "A-of-DIAMONDS", Hpoint: 4},
      {name: "7-of-DIAMONDS", Hpoint: 0},
      {name: "4-of-DIAMONDS", Hpoint: 0},
      {name: "A-of-HEARTS", Hpoint: 4},
      {name: "K-of-HEARTS", Hpoint: 3},
      {name: "J-of-HEARTS", Hpoint: 1},
      {name: "A-of-SPADES", Hpoint: 4},
      {name: "T-of-SPADES", Hpoint: 0}]};
  }
}
