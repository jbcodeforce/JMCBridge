import { Component, OnInit, ViewChild,  AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { BidLessonService} from '../bid-lesson.service';
import { Hand } from '../Hand';
import { Card } from '../Card';
import { fromEvent } from 'rxjs';

/**
 * Present the Bidding Game: the bottom part has the 13 cards of the player so he can bid
 * The top left has the current bidding, the right bottom the potential bid to select
 * The right column has principles for the tutorial and explanation for the solution
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

  private context: CanvasRenderingContext2D;
  canvasWidth: number = 1000;
  canvasHeight: number = 500;
  cardWidth: number = 85;
  cardHeight: number = 110;
  biddingWidth: number = 250;
  biddingHeight: number = 220;
  biddingX: number = this.canvasWidth - 10 - this.biddingWidth;
  biddingY: number = this.canvasHeight - 10 - this.biddingHeight;
  biddingXStep: number =23;
  biddingYStep: number = 15;
  colorText: string[] = [ "C","D","H","S","NT"];
  hand: Hand;
  // keep image name
  cardImgs = new Map<string,ElementRef>();
  cardImgSrcs: string[] =[];
  bidValue: number = 0;
  bidColor: number = 0;

  constructor(private router: Router,
    private bidService: BidLessonService) { 
    this.hand=this.bidService.getBiddingHand();
    for( var i = 0; i<13; i++) {
      this.cardImgSrcs[i]="assets/images/cards/"+this.hand.cards[i].name+".png";
    }
   
  }

  ngAfterViewInit() {
    this.context = this.canvas.nativeElement.getContext("2d");
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
  }

  drawCard(ref:number) {
    console.log('drawImage ' + ref);   
    let cardXStep: number = 25;
    let element: HTMLImageElement = this.cardImgs.get("c_"+ref).nativeElement;
    this.context.drawImage(element, 
    this.canvasWidth / 2 - 7 * cardXStep + ref * cardXStep,
    this.canvasHeight- this.cardHeight - 20 , 
    this.cardWidth, this.cardHeight);
  }

  drawBiddingText(){
    this.context.font="20px Georgia";
    this.context.clearRect(0, 0, 100, 30);
    this.context.fillText(this.bidValue + " " + this.colorText[this.bidColor],20,20);
  }

  drawBidding(){
    console.log('draw Bidding Image ', this.biddingX, this.biddingY);
    this.context.drawImage(this.biddingImg.nativeElement,
        this.biddingX,
        this.biddingY,
        this.biddingWidth,
        this.biddingHeight);
    let color =  this.context.fillStyle;
    this.context.fillStyle = "#003300";
    
    for (let i = 0;i<this.bidValue;i++) {
      this.context.fillRect( 
        this.biddingX, 
        this.biddingY,
        this.biddingXStep * 5,
        i * this.biddingYStep
        );
    }
    this.context.fillRect( 
      this.biddingX + this.biddingXStep * (4 - this.bidColor), 
      this.biddingY,
      this.biddingXStep * (1 + this.bidColor) ,
      this.bidValue * this.biddingYStep
      );
      this.context.fillStyle = color;
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
