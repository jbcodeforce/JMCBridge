import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidLessonsComponent } from './bid-lessons.component';

describe('BidLessonsComponent', () => {
  let component: BidLessonsComponent;
  let fixture: ComponentFixture<BidLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
