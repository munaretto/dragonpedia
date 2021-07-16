import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDragonControllerComponent } from './components/new-dragon-controller/new-dragon-controller.component';

const routes: Routes = [
  {
    path: '',
    component: NewDragonControllerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewDragonRoutingModule { }
