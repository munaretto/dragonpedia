import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ChipComponent } from './components/chip/chip.component';


const COMPONENTS = [ChipComponent];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [CommonModule, SharedRoutingModule],
})
export class SharedModule {}
