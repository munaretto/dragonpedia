import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent, NavbarComponent } from './components/index';
import { ModalComponent } from './components/modal/modal.component';

const COMPONENTS = [NavbarComponent, ModalComponent, AlertComponent];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
