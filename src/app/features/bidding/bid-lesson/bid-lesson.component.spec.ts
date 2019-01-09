import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidLessonComponent } from './bid-lesson.component';

describe('BidLessonsComponent', () => {
  let component: BidLessonComponent;
  let fixture: ComponentFixture<BidLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
