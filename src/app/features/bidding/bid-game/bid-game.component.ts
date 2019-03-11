import { Component, OnInit, ViewChild,  AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { BidLessonService} from '../bid-lesson.service';
import { Hand } from '../Hand';
import { Card } from '../Card';
import { fromEvent } from 'rxjs';
import { BidLesson } from '../BidLesson';
import { BidExercise } from '../BidExercise';

/**
 * Present the Bidding Game: the bottom part presents the 13 cards of the player he will use
 * to bid.
 * The top left has the current bidding sequence, the right bottom the potential bid to select from
 * The right column has principles for the exercises and explanation for the solution
 */
@Component({
  selector: 'app-bid-game',
  templateUrl: './bid-game.component.html',
  styleUrls: ['./bid-game.component.css']
})
export class BidGameComponent implements AfterViewInit {

  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('c_0') c_0: ElementRef;
  @ViewChild('c_1') c_1: ElementRef;
  @ViewChild('c_2') c_2: ElementRef;
  @ViewChild('c_3') c_3: ElementRef;
  @ViewChild('c_4') c_4: ElementRef;
  @ViewChild('c_5') c_5: ElementRef;
  @ViewChild('c_6') c_6: ElementRef;
  @ViewChild('c_7') c_7: ElementRef;
  @ViewChild('c_8') c_8: ElementRef;
  @ViewChild('c_9') c_9: ElementRef;
  @ViewChild('c_10') c_10: ElementRef;
  @ViewChild('c_11') c_11: ElementRef;
  @ViewChild('c_12') c_12: ElementRef;
  @ViewChild('biddings') biddingImg: ElementRef;

  private canvasContext: CanvasRenderingContext2D;
  canvasWidth: number = 1000;
  canvasHeight: number = 500;
  cardWidth: number = 85;
  cardHeight: number = 110;
  // dimensions for the bidding box on right bottom part of canvas
  biddingWidth: number = 250;
  biddingHeight: number = 220;
  biddingX: number = this.canvasWidth - 10 - this.biddingWidth;
  biddingY: number = this.canvasHeight - 10 - this.biddingHeight;
  biddingXStep: number =23;
  biddingYStep: number = 15;
  colorText: string[] = [ "C","D","H","S","NT"];
  // keep reference to each image html element to be used for drawing. The key is
  // the card code c_* of the player's cards
  cardImgs = new Map<string,ElementRef>();
  // 13 images may have different image card
  cardImgSrcs: string[] =[];
  // specific to the game
  hand: Hand;
  lesson: BidLesson;

  currentExercise : BidExercise;
  message: string = "";
  indexExercise: number = 0;
  // what user selected with the mouse
  bidValue: number = 0;
  bidColor: number = 0;

  /**
   * Get the current lesson with tutoials and exercises to process in this game
   * @param router 
   * @param bidService to access to backend
   */
  constructor(private router: Router,
    private bidService: BidLessonService) { 
    // need to know which exercice was selected from the lesson page as a lesson has mutliple exercise
    this.currentExercise = this.bidService.getBidExercise();
    this.bidService.getLesson().subscribe(data => {
      this.lesson = data;
    });
    this.hand=this.currentExercise.hands[0];
    this.loadCardImageNames();
  }

  loadCardImageNames(){
    for( var i = 0; i<13; i++) {
      this.cardImgSrcs[i]="assets/images/cards/"+this.hand.cards[i].imgSrc+".png";
    }
  }

  back(){
    this.router.navigate(['bidLesson']);
  }

  // Go to the next exercise of the current lesson
  next(){
    this.indexExercise++;
    if (this.indexExercise <= this.lesson.exercises.length) {
      this.currentExercise = this.lesson.exercises[ this.indexExercise];
      this.bidService.processCards(this.currentExercise);
      this.hand=this.currentExercise.hands[0];
      this.bidValue=0;
      this.loadCardImageNames();
    } else {
      this.message = "No more exercice, change lesson by going back to the lessons home page.";
    }
    this.drawTable();
  }

  validate(){
    console.log("Validate the bid match solution");
    if (this.currentExercise.solution == (this.bidValue +  this.colorText[this.bidColor])){
      this.message = "Right...";
    } else {
      this.message = "Not yet";
    }
  }

  ngAfterViewInit() {
    this.canvasContext = this.canvas.nativeElement.getContext("2d");
    this.cardImgs.set("c_0",this.c_0);
    this.cardImgs.set("c_1",this.c_1);
    this.cardImgs.set("c_2",this.c_2);
    this.cardImgs.set("c_3",this.c_3);
    this.cardImgs.set("c_4",this.c_4);
    this.cardImgs.set("c_5",this.c_5);
    this.cardImgs.set("c_6",this.c_6);
    this.cardImgs.set("c_7",this.c_7);
    this.cardImgs.set("c_8",this.c_8);
    this.cardImgs.set("c_9",this.c_9);
    this.cardImgs.set("c_10",this.c_10);
    this.cardImgs.set("c_11",this.c_11);
    this.cardImgs.set("c_12",this.c_12);
    this.captureEvents(this.canvas.nativeElement);
    this.drawTable();
  }

  drawTable(){
    if (this.canvasContext) {
      this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      for (var i = 0; i < 13; i++) {
        this.drawCard(i)
      }
      this.drawBiddingText();
      this.drawBidding();
    }
  }

  drawCard(ref:number) { 
    let cardXStep: number = 25;
    let element: HTMLImageElement = this.cardImgs.get("c_"+ref).nativeElement;
    let image:HTMLImageElement = new Image();
    image.src=this.cardImgSrcs[ref];
    image.onload = ()=> {
      this.canvasContext.drawImage(image, 
      this.canvasWidth / 2 - 7 * cardXStep + ref * cardXStep,
      this.canvasHeight - this.cardHeight - 20 , 
      this.cardWidth, this.cardHeight);
      }
  }

  drawBiddingText(){
    this.canvasContext.font="20px Georgia";
    this.canvasContext.fillStyle = "white";
    this.canvasContext.clearRect(0, 0, 100, 60);
    this.canvasContext.fillText(" S    W   " + "  N    E",5,17);
   // this.context.fillText("1C   -  " + " 2C   -",5,34);
    if (this.bidValue != 0) {
      this.canvasContext.fillText(this.bidValue +  this.colorText[this.bidColor],5,34);
    }
    this.canvasContext.fillText("North", 420,20);
    this.canvasContext.fillText("South", 420,270);
    this.canvasContext.fillText("East", 650,150);
    this.canvasContext.fillText("West", 30,150);
  }

  /**
   * Draw bidding images and remove the bids that could not be done now due to last
   * previous bid
   */
  drawBidding(){
    this.canvasContext.drawImage(this.biddingImg.nativeElement,
        this.biddingX,
        this.biddingY,
        this.biddingWidth,
        this.biddingHeight);
    let color =  this.canvasContext.fillStyle;
    this.canvasContext.fillStyle = "#003300";
    
    for (let i = 0;i<this.bidValue;i++) {
      this.canvasContext.fillRect( 
        this.biddingX, 
        this.biddingY,
        this.biddingXStep * 5,
        i * this.biddingYStep
        );
    }
    this.canvasContext.fillRect( 
      this.biddingX + this.biddingXStep * (4 - this.bidColor), 
      this.biddingY,
      this.biddingXStep * (1 + this.bidColor) ,
      this.bidValue * this.biddingYStep
    );
    this.canvasContext.fillStyle = color;
  }


  captureEvents(element: HTMLCanvasElement) {
    fromEvent(element,'mousedown').subscribe((res: MouseEvent) => {
      let rect = element.getBoundingClientRect();
      let x = res.clientX - rect.left;
      let y = res.clientY - rect.top;
      console.log(x,y);
      this.bidColor = 5 - Math.round((x-this.biddingX) / this.biddingXStep)
      if (this.bidColor < 0) {
        this.bidColor = 0;
      }
      if (this.bidColor > 4) {
        this.bidColor = 4;
      }
      this.bidValue = Math.round((y-this.biddingY) / this.biddingYStep);
      if (this.bidValue > 7) {
        this.bidValue = 7;
      }
      console.log( this.bidValue +  ' of ' + this.bidColor);
      this.drawBidding();
      this.drawBiddingText();
    })
  }


}
