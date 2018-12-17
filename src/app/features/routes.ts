import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BidLessonsHomeComponent } from './bidding/bid-lessons-home/bid-lessons-home.component';
import { BidLessonsComponent } from './bidding/bid-lessons/bid-lessons.component';
import { BidGameComponent } from './bidding/bid-game/bid-game.component';

export const routes: Routes = [
    // tutorial, and play
    { path: 'home', component: HomeComponent},
    // all lessons about biddings
    { path: 'bidLessonHome', component: BidLessonsHomeComponent},
    // list of bidding lesson for a seletected category
    { path: 'bidLesson', component: BidLessonsComponent},
    // bidding game with canvas
    { path: 'bidGame' , component: BidGameComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full'}
]