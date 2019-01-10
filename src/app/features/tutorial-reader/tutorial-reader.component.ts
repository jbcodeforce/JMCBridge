import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tutorial } from './Tutorial';

@Component({
  selector: 'app-tutorial-reader',
  templateUrl: './tutorial-reader.component.html',
  styleUrls: ['./tutorial-reader.component.css']
})
export class TutorialReaderComponent implements OnInit {

  @Input()
  tutorial: Tutorial;
  @Output()
  doneReading = new EventEmitter<boolean>();

  fileName: string;
  index: number = 0;

  constructor() {
    
  }
  
  ngOnInit() {
    if (this.tutorial.maxIndex == 0) {
      this.fileName = this.tutorial.urlMDPath + ".md";
    } else {
      this.fileName=this.tutorial.urlMDPath + "_" + this.index + ".md";
    }
  
  }

  back(){
    this.doneReading.emit(true);
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
