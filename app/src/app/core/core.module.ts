import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent, FooterComponent } from './components/index';
import { ModalComponent } from './components/modal/modal.component';

const COMPONENTS = [NavbarComponent, FooterComponent, ModalComponent];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
