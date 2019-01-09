import { Component, OnInit, Input } from '@angular/core';
import { Tutorial } from './Tutorial';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-reader',
  templateUrl: './tutorial-reader.component.html',
  styleUrls: ['./tutorial-reader.component.css']
})
export class TutorialReaderComponent implements OnInit {

  @Input()
  tutorial: Tutorial;
  @Input()
  urlBack: string;

  fileName: string;
  index: number = 0;

  constructor(private router: Router) {
    
  }
  
  ngOnInit() {
    if (this.tutorial.maxIndex == 0) {
      this.fileName = this.tutorial.urlMDPath + ".md";
    } else {
      this.fileName=this.tutorial.urlMDPath + "_" + this.index + ".md";
    }
  
  }

  back(){
    this.router.navigate([this.urlBack]);
  }

  next(){
    if (this.index < this.tutorial.maxIndex)  {
        this.index++;
    }
    this.fileName=this.tutorial.urlMDPath + "_" + this.index + ".md";
  }

  previous() {
    if (this.index > 0 )  {
        this.index--;
    }
    this.fileName=this.tutorial.urlMDPath + "_" +  this.index + ".md";
  }

  last(): boolean {
    return (this.index == this.tutorial.maxIndex);
  }

  first(): boolean {
      return (this.index == 0);
    }

}
