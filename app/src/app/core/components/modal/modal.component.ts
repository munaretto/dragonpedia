import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalConfig } from 'src/app/shared/interfaces/modal-config';
import { RequesterComponent } from 'src/app/shared/interfaces/requester-component';
import { ModalStatus } from '../../interfaces/modal-status';
import { ModalService } from '../../../shared/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() canShow: boolean = false;
  @Output() action : EventEmitter<boolean> = new EventEmitter();

  canOpen: boolean = false;
  requester: RequesterComponent | undefined;

  constructor(private modalService: ModalService) {
    this.extractModalStatus();
  }

  ngOnInit(): void {}

  private extractModalStatus() : void {
    this.modalService.modalStatus$.subscribe((statusObj : ModalStatus) => {
      this.canOpen = statusObj.canOpen;
      this.requester = statusObj.requester!;
    })
  }

  close() {
    this.modalService.close();
  }

  onConfirm() {
    this.requester?.receiveModalAnswer(true);
    this.close();
  }

  onDecline() {
    this.requester?.receiveModalAnswer(false);
    this.close();
  }


  ngOnDestroy() {
    console.log("DESTROYING MODAL");

  }

}
