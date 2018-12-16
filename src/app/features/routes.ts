import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BidLessonsHomeComponent } from './bidding/bid-lessons-home/bid-lessons-home.component';
import { BidLessonsComponent } from './bidding/bid-lessons/bid-lessons.component';
import { BidGameComponent } from './bidding/bid-game/bid-game.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'bidLessonHome', component: BidLessonsHomeComponent},
    { path: 'bidLesson', component: BidLessonsComponent},
    { path: 'bidGame' , component: BidGameComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full'}
]