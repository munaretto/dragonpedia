import { Component, OnInit } from '@angular/core';
import { ModifyDragonPresenterConfig } from 'src/app/shared/interfaces/modify-dragon-presenter-config';

@Component({
  selector: 'app-edit-dragon-controller',
  templateUrl: './edit-dragon-controller.component.html',
  styleUrls: ['./edit-dragon-controller.component.sass']
})
export class EditDragonControllerComponent implements OnInit {

  config: ModifyDragonPresenterConfig = {
    title: 'Editar dragão',
    description: 'Modifique as informações do dragão nos campos abaixo'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
