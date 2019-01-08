import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialReaderComponent } from './tutorial-reader.component';

describe('TutorialReaderComponent', () => {
  let component: TutorialReaderComponent;
  let fixture: ComponentFixture<TutorialReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
