import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BidLessonService} from '../bid-lesson.service';
import { BidLesson } from '../BidLesson';
import { Tutorial } from '../../tutorial-reader/Tutorial';
/**
 * Present a list of bidding lessons, in table format, according to the category selected
 */
@Component({
  selector: 'app-bid-lessons',
  templateUrl: './bid-lessons.component.html',
  styleUrls: ['./bid-lessons.component.css']
})
export class BidLessonsComponent implements OnInit {
  
  exercises: BidLesson[];
  title: string;
  tutorials: Tutorial[];
  tutDisplayedColumns: string[] = ['name', 'actions'];
  exoDisplayedColumns: string[] = ['name','currentExercise','total','completion', 'actions'];
  constructor(private router: Router,
    private bidService: BidLessonService) {
      this.title = this.bidService.getLessonCategoryName();
      this.bidService.getTutorialList().subscribe(
        data => {
          this.tutorials = data;
        });
      this.bidService.getExerciseList().subscribe(
        data => {
          this.exercises = data;
        });
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['bidLessonHome']);
  }

  open(element:BidLesson){
    console.log("open " + JSON.stringify(element));
    this.bidService.setBidLesson(element);
    this.router.navigate(['bidGame']);
  }

  learn(element:Tutorial){
    console.log("learn " + JSON.stringify(element));
    this.bidService.setTutorial(element);
    this.router.navigate(['tutorialReader']);
  }
}
