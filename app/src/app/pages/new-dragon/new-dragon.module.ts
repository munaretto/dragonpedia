import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewDragonRoutingModule } from './new-dragon-routing.module';
import { NewDragonControllerComponent } from './components/new-dragon-controller/new-dragon-controller.component';
import { SharedModule } from 'src/app/shared/shared.module';

const COMPONENTS = [NewDragonControllerComponent]


@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    NewDragonRoutingModule,
    SharedModule
  ]
})
export class NewDragonModule { }
