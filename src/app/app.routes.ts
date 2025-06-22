import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { NotfoundComponent } from './shared/component/notfound/notfound.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeLayoutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./features/user/user.routes').then((r) => r.userRoute),
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: 'dashboard',
  //       loadComponent: () =>
  //         import(
  //           '../app/features/user/component/dashboard/dashboard.component'
  //         ).then((c) => c.DashboardComponent),
  //       // component: DashboardComponent,
  //       canActivate: [authGuard],
  //     },
  //     {
  //       path: 'addnotes',
  //       loadComponent: () =>
  //         import(
  //           '../app/features/user/component/add-note/add-note.component'
  //         ).then((c) => c.AddNoteComponent),
  //       // component: AddNoteComponent,
  //       canActivate: [authGuard],
  //     },
  //     {
  //       path: 'view-notes',
  //       // component: ViewNotesComponent,
  //       loadComponent: () =>
  //         import(
  //           '../app/features/user/component/view-notes/view-notes.component'
  //         ).then((c) => c.ViewNotesComponent),
  //       canActivate: [authGuard],
  //     },
  //     {
  //       path: 'add-category',
  //       // component: AddCategoryComponent,
  //       loadComponent: () =>
  //         import(
  //           '../app/features/user/component/add-category/add-category.component'
  //         ).then((c) => c.AddCategoryComponent),
  //       canActivate: [authGuard],
  //     },
  //     {
  //       path: 'view-category',
  //       // component: ViewCategoryComponent,
  //       loadComponent: () =>
  //         import(
  //           '../app/features/user/component/view-category/view-category.component'
  //         ).then((c) => c.ViewCategoryComponent),
  //       canActivate: [authGuard],
  //     },
  //     {
  //       path: 'favorite',
  //       // component: FavouritNoteComponent,
  //       loadComponent: () =>
  //         import(
  //           '../app/features/user/component/favourit-note/favourit-note.component'
  //         ).then((c) => c.FavouritNoteComponent),
  //       canActivate: [authGuard],
  //     },
  //     {
  //       path: 'recycle-bin',
  //       // component: RecycleBinComponent,
  //       loadComponent: () =>
  //         import(
  //           '../app/features/user/component/recycle-bin/recycle-bin.component'
  //         ).then((c) => c.RecycleBinComponent),
  //       canActivate: [authGuard],
  //     },
  //   ],
  // },
];
