import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Dragon } from 'src/app/shared/interfaces/dragon';
import { ModifyDragonPresenterConfig } from 'src/app/shared/interfaces/modify-dragon-presenter-config';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { DragonsService } from 'src/app/shared/services/dragons/dragons.service';

@Component({
  selector: 'app-edit-dragon-controller',
  templateUrl: './edit-dragon-controller.component.html',
  styleUrls: ['./edit-dragon-controller.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditDragonControllerComponent implements OnInit, OnDestroy {

  config: ModifyDragonPresenterConfig = {
    title: 'Editar dragão',
    description: 'Modifique as informações do dragão nos campos abaixo'
  }

  routeSubscription: Subscription = new Subscription();
  routeId: string = '';
  dragon: Dragon | null = null;

  constructor(private route: ActivatedRoute, private dragonsService: DragonsService, private detectRef: ChangeDetectorRef, private alertService: AlertService) { }

  ngOnInit(): void {
    this.getRouteId();
  }

  private getRouteId() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.routeId = params['id'];
      this.getDragon();
    });
  }

  async getDragon() {
    this.dragon = {... await this.dragonsService.getDragon(this.routeId).toPromise()}
    this.detectRef.detectChanges();
  }

  async onUpdateDragon(form: FormGroup) {
    const updatedDragon : Dragon = {
      name: form.get('name')!.value,
      type: form.get('type')!.value,
      histories: form.get('histories')!.value
    }

    await this.dragonsService.editDragon(updatedDragon, this.routeId)
      .toPromise()
      .then((res : Dragon) => {
        this.alertService.open({
          message: `Dragão de id ${this.routeId} atualizado`,
          type: 'SUCCESS'
        })
      })
      .catch(err => {
        console.error(`Erro ao atualizar dragão de id ${this.routeId}.`, err)
        this.alertService.open({
          message: `Erro ao atualizar dragão`,
          type: 'ERROR'
        })
      });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
