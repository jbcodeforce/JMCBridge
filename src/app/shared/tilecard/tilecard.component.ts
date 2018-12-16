import { Component, OnInit, Input } from '@angular/core';
import { Router }   from '@angular/router';

@Component({
  selector: 'app-tilecard',
  templateUrl: './tilecard.component.html',
  styleUrls: ['./tilecard.component.css']
})
export class TilecardComponent implements OnInit {
  @Input()
  title : string = "Title";
  @Input()
  subTitle: string = "";
  @Input()
  description: string = "The content";
  @Input()
  smImg: string = "assets/images/study.jpg";
  @Input()
  urlMdPath: string = ""
  @Input()
  buttonName: string = 'Submit';
  @Input()
  urlPath: string = 'home';

  style: string ='';


  constructor( private router: Router) { }

  ngOnInit() {
    this.style = "background-image: url(smImg);background-size: cover;"
  }

  submit() {
    this.router.navigate([this.urlPath]);
  }

}
