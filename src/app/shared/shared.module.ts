import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { MarkdownModule } from 'ngx-markdown'
import { TilecardComponent } from './tilecard/tilecard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TutorialDialogComponent } from './tutorial-dialog/tutorial-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule,
    MatCardModule
  ],
  declarations: [TilecardComponent, HeaderComponent, FooterComponent, TutorialDialogComponent],
  exports: [TilecardComponent, HeaderComponent, FooterComponent ]
})
export class SharedModule { }
