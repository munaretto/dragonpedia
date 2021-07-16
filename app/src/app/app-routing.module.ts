import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/404-not-found/components/not-found/not-found.component';
import { LoggedInUserAuthGuard } from './shared/guards/auth-loggedin-users.guard';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dragons',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
    canActivate: [LoggedInUserAuthGuard]
  },
  {
    path: 'dragons',
    loadChildren: () =>
      import('./pages/list-dragons/list-dragons.module').then(
        (m) => m.ListDragonsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'dragons/new',
    loadChildren: () =>
      import('./pages/new-dragon/new-dragon.module').then(
        (m) => m.NewDragonModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'dragons/edit/:id',
    loadChildren: () =>
      import('./pages/edit-dragon/edit-dragon.module').then(
        (m) => m.EditDragonModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'dragons/view/:id',
    loadChildren: () =>
      import('./pages/view-dragon/view-dragon.module').then(
        (m) => m.ViewDragonModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '/404',
  },
  {
    path: '**',
    loadChildren: () => import('./core/components/404-not-found/404-not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
