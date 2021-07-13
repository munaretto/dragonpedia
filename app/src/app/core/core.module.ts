import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent, FooterComponent } from './components/index';

const COMPONENTS = [NavbarComponent, FooterComponent];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
