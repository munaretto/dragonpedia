import { AfterContentChecked, AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dragon } from '../../interfaces/dragon';
import { ModifyDragonPresenterConfig } from '../../interfaces/modify-dragon-presenter-config';

@Component({
  selector: 'app-modify-dragon-presenter',
  templateUrl: './modify-dragon-presenter.component.html',
  styleUrls: ['./modify-dragon-presenter.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModifyDragonPresenterComponent implements OnInit {

  @Input() dragon: Dragon = {
    name: '',
    type: '',
    histories: ''
  }

  @Input() config: ModifyDragonPresenterConfig = {
    title: '',
    description: ''
  }

  @Output() actionClicked: EventEmitter<FormGroup> = new EventEmitter();

  form: FormGroup = this.fb.group({
    id: [''],
    createdAt: [''],
    name: ['', Validators.required],
    type: ['', Validators.required],
    histories: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private detectRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.updateFormFromInput();
  }

  private updateFormFromInput() {
    this.form = this.fb.group({
      id: [this.dragon.id],
      createdAt: [this.dragon.createdAt],
      name: [this.dragon.name, Validators.required],
      type: [this.dragon.type, Validators.required],
      histories: [this.dragon.histories, Validators.required]
    })
    this.detectRef.detectChanges();
  }

  onActionClicked() {
    this.actionClicked.emit(this.form);
  }


}
