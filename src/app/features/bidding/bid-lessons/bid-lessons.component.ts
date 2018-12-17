import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BidLessonService} from '../bid-lesson.service';
import { BidLesson } from '../BidLesson';

/**
 * Present a list of bidding lessons according to the category selected
 */
@Component({
  selector: 'app-bid-lessons',
  templateUrl: './bid-lessons.component.html',
  styleUrls: ['./bid-lessons.component.css']
})
export class BidLessonsComponent implements OnInit {
  
  lessons: BidLesson[];
  title: string;

  displayedColumns: string[] = ['name','currentExercise','total','completion', 'actions'];
  constructor(private router: Router,
    private bidService: BidLessonService) {
      this.title = this.bidService.getLessonCategoryName();
      this.lessons = this.bidService.getLessonList();
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
}
