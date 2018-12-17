import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, 
         MatCardModule , 
         MatIconModule, 
         MatTableModule, 
         MatGridListModule,
         MatStepperModule,
         MatSortModule} from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { routes } from './routes';
import { HomeComponent } from './home/home.component';
import { BidLessonsHomeComponent } from './bidding/bid-lessons-home/bid-lessons-home.component';
import { BidLessonsComponent } from './bidding/bid-lessons/bid-lessons.component';
import { BidGameComponent } from './bidding/bid-game/bid-game.component';
import { BidLessonService } from './bidding/bid-lesson.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false
      }),
      MatToolbarModule,
      MatCardModule,
      MatTableModule,
      MatSortModule,
      MatGridListModule,
      MatStepperModule,
      MatIconModule
  ],
  declarations: [HomeComponent, BidLessonsHomeComponent, BidLessonsComponent, BidGameComponent],
  exports: [HomeComponent, BidLessonsHomeComponent, RouterModule],
  providers: [BidLessonService]
})
export class FeaturesModule { }
