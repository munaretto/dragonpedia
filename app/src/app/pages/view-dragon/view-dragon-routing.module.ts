import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDragonComponent } from './components/view-dragon/view-dragon.component';

const routes: Routes = [
  {
    path: '',
    component: ViewDragonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDragonRoutingModule { }
