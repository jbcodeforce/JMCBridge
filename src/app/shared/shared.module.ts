import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { TilecardComponent } from './tilecard/tilecard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [TilecardComponent, HeaderComponent, FooterComponent],
  exports: [TilecardComponent, HeaderComponent, FooterComponent ]
})
export class SharedModule { }
