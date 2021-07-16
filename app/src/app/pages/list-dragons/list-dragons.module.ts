import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDragonsRoutingModule } from './list-dragons-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListDragonsComponent } from './components/list-dragons/list-dragons.component';
import { DragonCardComponent } from './components/dragon-card/dragon-card.component';

const COMPONENTS = [ListDragonsComponent, DragonCardComponent];


@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    ListDragonsRoutingModule,
    SharedModule
  ]
})
export class ListDragonsModule { }
