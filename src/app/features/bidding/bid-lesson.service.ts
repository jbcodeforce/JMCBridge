import { Injectable } from '@angular/core';
import { Hand } from './Hand';
import { Card } from './Card';
import { BidLesson } from './BidLesson';
import { BidExercise } from './BidExercise';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from  'rxjs/operators';
import { Tutorial } from '../tutorial-reader/Tutorial';
/*
* Service to manage bidding lessons
*/
@Injectable({
  providedIn: 'root'
})
export class BidLessonService {
  lessonCategoryName: string;
  currentTutorial: Tutorial;
  currentExercise: BidExercise;
  lesson: BidLesson;
  biddingAPIurl: string = "http://localhost:5000/api/biddings/";
  
  constructor(private http: HttpClient) { }

  setLessonCategoryName(l:string){
    this.lessonCategoryName = l;
  }
  getLessonCategoryName(){
    return  this.lessonCategoryName;
  }

  getLesson(): Observable<BidLesson> {
    if (this.lesson === undefined) {
        // got to backend to get these using the user and category name
        return this.http.get<BidLesson>(this.biddingAPIurl + "lessons/" + this.getLessonCategoryName())
        .pipe(map(
          data => { this.lesson =  data;            
                  return this.lesson},
          error => {console.log("Error to get lesson " + error)}
        ))
    } else {
      return of(this.lesson);
    }
  }

  getCurrentLesson(){
    return this.lesson;
  }

  setBidExercise(exo: BidExercise) {
    this.currentExercise = exo;
    this.processCards(exo);
  }

  getBidExercise() {
    return this.currentExercise;
  }

  setTutorial(tutorial: Tutorial){
    this.currentTutorial = tutorial;
  }

  /**
   * Transform card list from string to cards
   * @param l  
   */
  processCards(e: BidExercise) {
        e.hands[0].cards=[]
        e.hands[0].cardsAsString.forEach( c => {
           let card:Card = new Card();
           card.name=c;
           card.imgSrc=c[0]+"-of-";
           if (c[1] == "C") {
            card.imgSrc+="CLUBS";
           }
           if (c[1] == "S") {
            card.imgSrc+="SPADES";
           }
           if (c[1] == "D") {
            card.imgSrc+="DIAMONDS";
           }
           if (c[1] == "H") {
            card.imgSrc+="HEARTS";
           }
           e.hands[0].cards.push(card);
        })
    return e;
  }
}
