import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AlertConfig } from 'src/app/shared/interfaces/alert-config';
import { AlertService } from 'src/app/shared/services/alert/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass']
})
export class AlertComponent implements OnInit, OnDestroy {

  alertData : AlertConfig | undefined;
  subscription: Subscription | undefined;

  constructor(private alertService: AlertService) {}

  getAlertData() {
    this.subscription = this.alertService.alertStatus$.subscribe((data : AlertConfig | undefined) => {
      this.alertData = data as AlertConfig;
      console.log("PASSANDO");
    })
  }

  onCardClicked() {
    this.alertService.close();
  }

  ngOnInit(): void {
    this.getAlertData();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }



}
