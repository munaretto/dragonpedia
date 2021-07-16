import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable, of} from 'rxjs';
import { RequesterComponent } from 'src/app/shared/interfaces/requester-component';
import { ModalStatus } from '../../../core/interfaces/modal-status';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private readonly modalStatus = new BehaviorSubject<ModalStatus>({
    canOpen: false
  });
  readonly modalStatus$: Observable<ModalStatus> = this.modalStatus.asObservable();

  open(requester: RequesterComponent) {
    this.modalStatus.next({canOpen: true, requester: requester});
  }

  close() {
    this.modalStatus.next({canOpen: false});
  }
}
