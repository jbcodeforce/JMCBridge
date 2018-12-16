import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BidLessonService} from '../bid-lesson.service';

/**
 * Present a list of bidding lessons according to the lesson selected
 */
@Component({
  selector: 'app-bid-lessons',
  templateUrl: './bid-lessons.component.html',
  styleUrls: ['./bid-lessons.component.css']
})
export class BidLessonsComponent implements OnInit {

  constructor(private router: Router,
    private bidService: BidLessonService) { }

  ngOnInit() {
  }

}
