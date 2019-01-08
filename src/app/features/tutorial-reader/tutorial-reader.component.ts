import { Component, OnInit, Input } from '@angular/core';
import { Tutorial } from './Tutorial';
import { Router } from '@angular/router';
import { BidLessonService} from '../bidding/bid-lesson.service';

@Component({
  selector: 'app-tutorial-reader',
  templateUrl: './tutorial-reader.component.html',
  styleUrls: ['./tutorial-reader.component.css']
})
export class TutorialReaderComponent implements OnInit {

  @Input()
  urlMDPath:string;
  tutorial: Tutorial;

  constructor(private router: Router,
    private bidService: BidLessonService) {
      this.tutorial = bidService.currentTutorial;
     }
  
  ngOnInit() {
  }

}
