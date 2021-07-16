import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './404-not-found-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

const COMPONENTS = [
  NotFoundComponent
]

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }
