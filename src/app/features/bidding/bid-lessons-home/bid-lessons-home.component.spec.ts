import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidLessonsHomeComponent } from './bid-lessons-home.component';

describe('BidLessonsHomeComponent', () => {
  let component: BidLessonsHomeComponent;
  let fixture: ComponentFixture<BidLessonsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidLessonsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidLessonsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
