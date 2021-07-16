import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dragon } from 'src/app/shared/interfaces/dragon';
import { RequesterComponent } from 'src/app/shared/interfaces/requester-component';
import { ModalService } from 'src/app/shared/services/modal/modal.service';

@Component({
  selector: 'app-dragon-card',
  templateUrl: './dragon-card.component.html',
  styleUrls: ['./dragon-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragonCardComponent implements OnInit, RequesterComponent {

  @Input() dragon: Dragon;
  @Output() delete: EventEmitter<boolean> = new EventEmitter;

  constructor(private modalService: ModalService) {
    this.dragon = {
      name: '',
      histories: '',
      type: '',
      id: '',
      createdAt: ''
    };
  }

  ngOnInit(): void {
    console.log("DRAGON: ", this.dragon);

  }

  openModal() {
    this.modalService.open(this);
  }

  receiveModalAnswer(answer: boolean) {
    this.delete.emit(answer)
  }

}
