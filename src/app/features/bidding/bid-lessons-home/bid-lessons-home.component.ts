import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BidLessonService} from '../bid-lesson.service';

@Component({
  selector: 'app-bid-lessons-home',
  templateUrl: './bid-lessons-home.component.html',
  styleUrls: ['./bid-lessons-home.component.css']
})
export class BidLessonsHomeComponent implements OnInit {
  title: string = "Bidding Lesson Home";
  constructor(private router: Router,
              private bidService: BidLessonService) { }

  ngOnInit() {
  }

  opening(){
    console.log('Opening setting');
    this.bidService.setLessonName('opening');
    this.router.navigate(['bidLesson']);
  }
}
