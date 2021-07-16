import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditDragonRoutingModule } from './edit-dragon-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditDragonControllerComponent } from './components/edit-dragon-controller/edit-dragon-controller.component';

const COMPONENTS = [EditDragonControllerComponent]


@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    EditDragonRoutingModule,
    SharedModule
  ]
})
export class EditDragonModule { }
