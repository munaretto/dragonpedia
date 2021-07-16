import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDragonsComponent } from './components/list-dragons/list-dragons.component';

const routes: Routes = [
  {
    path: '',
    component: ListDragonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDragonsRoutingModule { }
