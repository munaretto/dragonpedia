import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDragonControllerComponent } from './components/edit-dragon-controller/edit-dragon-controller.component';

const routes: Routes = [
  {
    path: '',
    component: EditDragonControllerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDragonRoutingModule { }
