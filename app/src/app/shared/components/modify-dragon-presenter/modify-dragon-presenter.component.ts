import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dragon } from '../../interfaces/dragon';
import { ModifyDragonPresenterConfig } from '../../interfaces/modify-dragon-presenter-config';

@Component({
  selector: 'app-modify-dragon-presenter',
  templateUrl: './modify-dragon-presenter.component.html',
  styleUrls: ['./modify-dragon-presenter.component.sass']
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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}

  onActionClicked() {
    this.actionClicked.emit(this.form);
  }

}
