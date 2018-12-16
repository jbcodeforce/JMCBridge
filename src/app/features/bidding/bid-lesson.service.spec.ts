import { TestBed, inject } from '@angular/core/testing';

import { BidLessonService } from './bid-lesson.service';

describe('BidLessonServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BidLessonService]
    });
  });

  it('should be created', inject([BidLessonService], (service: BidLessonService) => {
    expect(service).toBeTruthy();
  }));
});
