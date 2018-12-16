import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidGameComponent } from './bid-game.component';

describe('BidGameComponent', () => {
  let component: BidGameComponent;
  let fixture: ComponentFixture<BidGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
