import { getTestBed, TestBed } from '@angular/core/testing';

import { DragonsService } from './dragons.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Dragon } from '../../interfaces/dragon';
import { environment } from 'src/environments/environment';

describe('DragonsService', () => {
  let service: DragonsService;
  let httpClientMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DragonsService);
    httpClientMock = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpClientMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create dragon', () => {
    const fakeDragon : Dragon = {
      name: "Fake drago",
      type: "Fake",
      histories: "Fake history"
    }
    const flushObj : Dragon = {...fakeDragon, id: '66', createdAt: "2021-07-05T13:14:08.240Z"};
    service.createDragon(fakeDragon).subscribe((resp : Dragon) => {
      expect(resp).toEqual(flushObj);
    });

    const request = httpClientMock.expectOne(`${environment.apiUrl}`);
    expect(request.request.method).toBe("POST");

    request.flush(flushObj)
  })

  it('should edit dragon', () => {
    const fakeDragon : Dragon = {
      name: "Fake drago",
      type: "Fake",
      histories: "Fake history"
    }
    const flushObj : Dragon = {...fakeDragon, id: '66', createdAt: "2021-07-05T13:14:08.240Z"};
    service.editDragon(fakeDragon, '66').subscribe((resp : Dragon) => {
      expect(resp).toEqual(flushObj);
    });

    const request = httpClientMock.expectOne(`${environment.apiUrl}/66`);
    expect(request.request.method).toBe("PUT");

    request.flush(flushObj)
  })

  it('should get all dragons', () => {
    const fakeDragons : Dragon[] = [
      {
        name: "Fake drago",
        type: "Fake",
        histories: "Fake history"
      },
      {
        name: "Fake drago 1",
        type: "Fake",
        histories: "Fake history"
      },
      {
        name: "Fake drago2",
        type: "Fake",
        histories: "Fake history"
      }
    ]

    service.getDragons().subscribe((resp : Dragon[]) => {
      expect(resp.length).toBe(3);
      expect(resp).toEqual(fakeDragons);
    });

    const request = httpClientMock.expectOne(`${environment.apiUrl}`);
    expect(request.request.method).toBe("GET");

    request.flush(fakeDragons)
  })

  it('should get dragon with id 21', () => {
    const fakeDragon : Dragon = {
        id: '21',
        createdAt: "2021-07-05T13:14:08.240Z",
        name: "Fake drago",
        type: "Fake",
        histories: "Fake history"
    }

    service.getDragon('21').subscribe((resp : Dragon) => {
      expect(resp).toEqual(fakeDragon);
    });

    const request = httpClientMock.expectOne(`${environment.apiUrl}/21`);
    expect(request.request.method).toBe("GET");

    request.flush(fakeDragon)
  })

  it('should delete id 21', () => {
    const fakeDragon : Dragon = {
        id: '21',
        createdAt: "2021-07-05T13:14:08.240Z",
        name: "Fake drago",
        type: "Fake",
        histories: "Fake history"
    }

    service.deleteDragon('21').subscribe((resp : Dragon) => {
      expect(resp).toEqual(fakeDragon);
    });

    const request = httpClientMock.expectOne(`${environment.apiUrl}/21`);
    expect(request.request.method).toBe("DELETE");

    request.flush(fakeDragon)
  })
});
