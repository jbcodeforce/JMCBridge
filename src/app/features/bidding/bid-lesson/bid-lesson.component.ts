import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BidLessonService} from '../bid-lesson.service';
import { BidLesson } from '../BidLesson';
import { Tutorial } from '../../tutorial-reader/Tutorial';
/**
 * Present a list of bidding lessons, in table format, according to the category selected
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
      this.bidService.getLessonList().subscribe(
        data => {
          this.lesson = data;
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
    this.selectedTutorial=element;
  }
}
