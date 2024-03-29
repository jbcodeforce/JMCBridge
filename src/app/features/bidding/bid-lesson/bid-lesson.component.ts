import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BidLessonService} from '../bid-lesson.service';
import { BidLesson } from '../BidLesson';
import { BidExercise } from '../BidExercise';

import { Tutorial } from '../../tutorial-reader/Tutorial';
/**
 * Present two tables:
 *  - a list of bidding tutorials for explaining the concepts, 
 *  - a list of exercices to train on the subject
 * But when a tutorial is selected the tables are replaced by a markdown reader.
 * When an exercice is selected it goes to the big game with graphical cards.
 */
@Component({
  selector: 'app-bid-lesson',
  templateUrl: './bid-lesson.component.html',
  styleUrls: ['./bid-lesson.component.css']
})
export class BidLessonComponent implements OnInit {
  
  lesson: BidLesson;
  title: string;
  selectedTutorial: Tutorial;

  tutDisplayedColumns: string[] = ['name', 'actions'];
  exoDisplayedColumns: string[] = ['name','completion', 'actions2'];
  
  constructor(private router: Router,
    private bidService: BidLessonService) {
      this.title = this.bidService.getLessonCategoryName();
      this.bidService.getLesson().subscribe(
        data => {
          this.lesson = data;
        });
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['bidLessonHome']);
  }

  closeTutorial(done:boolean) {
    this.selectedTutorial = null;
  }

  open(element: BidExercise){
    console.log("open " + JSON.stringify(element));
    this.bidService.setBidExercise(element);
    this.router.navigate(['bidGame']);
  }

  // present the tutorial
  learn(element:Tutorial){
    console.log("learn " + JSON.stringify(element));
    this.selectedTutorial=element;
  }
}
