import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Dragon } from 'src/app/shared/interfaces/dragon';
import { ModifyDragonPresenterConfig } from 'src/app/shared/interfaces/modify-dragon-presenter-config';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { DragonsService } from 'src/app/shared/services/dragons/dragons.service';

@Component({
  selector: 'app-new-dragon-controller',
  templateUrl: './new-dragon-controller.component.html',
  styleUrls: ['./new-dragon-controller.component.sass']
})
export class NewDragonControllerComponent implements OnInit {

  config: ModifyDragonPresenterConfig = {
    title: 'Adicionar novo dragão',
    description: 'Preencha os campos abaixo para adicionar um novo dragão à coleção'
  }

  constructor(private dragonsService: DragonsService, private alertService: AlertService) { }

  ngOnInit(): void {
  }

  createDragon(form: FormGroup) {
    this.dragonsService.createDragon({
      name: form.get('name')!.value,
      type: form.get('type')!.value,
      histories: form.get('histories')!.value
    })
    .toPromise()
    .then(res => {
      this.alertService.open({
        message: `Dragão adicionado!`,
        type: 'SUCCESS'
      })
    })
    .catch(err => {
      this.alertService.open({
        message: `Erro ao criar dragão`,
        type: 'ERROR'
      })
      console.log("ERRO AO CRIAR DRAGÃO: ", err)
    })
  }

}
