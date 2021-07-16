import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dragon } from 'src/app/shared/interfaces/dragon';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { DragonsService } from 'src/app/shared/services/dragons/dragons.service';

@Component({
  selector: 'app-list-dragons',
  templateUrl: './list-dragons.component.html',
  styleUrls: ['./list-dragons.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDragonsComponent implements OnInit {
  dragons: Dragon[] = [];

  constructor(
    private dragonsService: DragonsService,
    private detectRef: ChangeDetectorRef,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.getSortedDragons();
  }

  async getSortedDragons() {
    const originalArr = await this.dragonsService.getDragons().toPromise();
    this.dragons = this.sortArrAsc(originalArr);
    this.detectRef.detectChanges();
  }

  private sortArrAsc(arr : Dragon[]) {
    return arr.sort((a: Dragon, b: Dragon) => {
      return a.name.toLowerCase() < b.name.toLowerCase()
        ? -1
        : a.name.toLowerCase() > b.name.toLowerCase()
        ? 1
        : 0;
    }) as Dragon[];
  }

  deleteDragon(shouldDelete: boolean, id: string) {
    if (shouldDelete) {
      this.dragonsService.deleteDragon(id).toPromise()
        .then(resp => {
          this.dragons = this.dragons.filter((dragon: Dragon) => dragon.id !== id);
          this.detectRef.detectChanges();
          this.alertService.open({
            type: 'SUCCESS',
            message: `Dragão de id ${id} excluído!`
          })
        })
        .catch(err => {
          this.alertService.open({
            type: 'ERROR',
            message: `Erro ao excluir dragão`
          })
          console.error("Erro ao remover dragão. ", err);
      });
    }
  }
}
