import { Injectable } from '@angular/core';
import { Hand } from './Hand';
import { Card } from './Card';
import { BidLesson } from './BidLesson';
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
  currentLesson: BidLesson;
  lessons: BidLesson[];
  tutorials: Tutorial[];
  biddingAPIurl: string = "http://localhost:5000/api/biddings/";
  constructor(private http: HttpClient) { }

  setLessonCategoryName(l:string){
    this.lessonCategoryName = l;
  }
  getLessonCategoryName(){
    return  this.lessonCategoryName;
  }

  getTutorialList(): Observable<Tutorial[]> {
    if (this.tutorials === undefined) {
        // got to backend to get these using the user and category name
        return this.http.get<Tutorial[]>(this.biddingAPIurl + "tutorials/" + this.getLessonCategoryName())
        .pipe(map(
          data => { this.tutorials =  data;            
                  return this.tutorials},
          error => {console.log("Error to get lessons " + error)}
        ))
    } else {
      return of(this.tutorials);
    }
  }

  getExerciseList(): Observable<BidLesson[]> {
    if (this.lessons === undefined) {
        // got to backend to get these using the user and category name
        return this.http.get<BidLesson[]>(this.biddingAPIurl + "exercises/" + this.getLessonCategoryName())
        .pipe(map(
          data => { this.lessons =  this.processCards(data);            
                  return this.lessons},
          error => {console.log("Error to get exercices " + error)}
        ))
    } else {
      return of(this.lessons);
    }
  }

  getCurrentLesson(){
    return this.currentLesson;
  }

  setBidLesson(lesson: BidLesson) {
    this.currentLesson = lesson;
  }

  setTutorial(tutorial: Tutorial){
    this.currentTutorial = tutorial;
  }

  /**
   * Transform card list from string to cards
   * @param l  
   */
  processCards(l: BidLesson[]) {
    l.forEach( (b) => {
      b.exercises.forEach( e => {
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
      })
    } )
    return l;
  }
}
