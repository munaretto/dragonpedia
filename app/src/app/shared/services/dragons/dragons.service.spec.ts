import { TestBed } from '@angular/core/testing';

import { DragonsService } from './dragons.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DragonsService', () => {
  let service: DragonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DragonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
