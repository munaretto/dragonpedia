import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Dragon } from 'src/app/shared/interfaces/dragon';
import { DragonsService } from 'src/app/shared/services/dragons/dragons.service';

@Component({
  selector: 'app-view-dragon',
  templateUrl: './view-dragon.component.html',
  styleUrls: ['./view-dragon.component.sass']
})
export class ViewDragonComponent implements OnInit, OnDestroy {

  routeSubscription: Subscription = new Subscription();
  dragon: Dragon | undefined;
  routeId: string = '';

  constructor(private dragonsService: DragonsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRouteId();
  }

  private getRouteId() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.routeId = params['id'];
      this.getDragon();
    });
  }

  getDragon() {
    this.dragonsService.getDragon(this.routeId).toPromise()
    .then((dragon: Dragon) => {
      this.dragon = dragon;
    })
    .catch(err => {
      console.error("Erro ao buscar dragão. ", err);
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
