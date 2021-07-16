import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ChipComponent } from './components/chip/chip.component';
import { ModifyDragonPresenterComponent } from './components/modify-dragon-presenter/modify-dragon-presenter.component';
import { ReactiveFormsModule } from '@angular/forms';


const COMPONENTS = [ChipComponent, ModifyDragonPresenterComponent];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [CommonModule, SharedRoutingModule, ReactiveFormsModule],
})
export class SharedModule {}
