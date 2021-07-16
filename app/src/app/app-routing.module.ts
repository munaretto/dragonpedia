import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'dragons',
    loadChildren: () => import('./pages/list-dragons/list-dragons.module').then((m) => m.ListDragonsModule),
  },
  {
    path: 'dragons/new',
    loadChildren: () => import('./pages/new-dragon/new-dragon.module').then((m) => m.NewDragonModule),
  },
  {
    path: 'dragons/edit/:id',
    loadChildren: () => import('./pages/edit-dragon/edit-dragon.module').then((m) => m.EditDragonModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
