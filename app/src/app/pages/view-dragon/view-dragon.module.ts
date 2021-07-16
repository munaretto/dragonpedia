import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewDragonRoutingModule } from './view-dragon-routing.module';
import { ViewDragonComponent } from './components/view-dragon/view-dragon.component';
import { SharedModule } from 'src/app/shared/shared.module';

const COMPONENTS = [ViewDragonComponent]


@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    ViewDragonRoutingModule,
    SharedModule
  ]
})
export class ViewDragonModule { }
