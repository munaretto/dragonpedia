import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertConfig } from '../../interfaces/alert-config';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  private readonly alertStatus = new BehaviorSubject<AlertConfig>({
    message: '',
    type: 'SUCCESS',
    canOpen: false
  });
  readonly alertStatus$: Observable<AlertConfig> = this.alertStatus.asObservable();

  open(config: AlertConfig) {
    const newObj = {...config, canOpen: true}
    this.alertStatus.next(newObj);
  }

  close() {
    this.alertStatus.next({
      message: '',
      type: 'SUCCESS',
      canOpen: false
    });
  }
}
