import { Routes } from '@angular/router';
import { LoginComponent } from './features/home/component/login/login.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { DashboardComponent } from './features/user/component/dashboard/dashboard.component';
import { AddNoteComponent } from './features/user/component/add-note/add-note.component';
import { FavouritNoteComponent } from './features/user/favourit-note/favourit-note.component';
import { RecycleBinComponent } from './features/user/recycle-bin/recycle-bin.component';
import { ViewNotesComponent } from './features/user/view-notes/view-notes.component';
import { NotfoundComponent } from './shared/component/notfound/notfound.component';
import { AddCategoryComponent } from './features/user/component/add-category/add-category.component';
import { ViewCategoryComponent } from './features/user/view-category/view-category.component';
import { authGuard } from './core/guards/auth.guard';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';

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
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard],
      },
      {
        path: 'addnotes',
        component: AddNoteComponent,
        canActivate: [authGuard],
      },
      {
        path: 'view-notes',
        component: ViewNotesComponent,
        canActivate: [authGuard],
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
        canActivate: [authGuard],
      },
      {
        path: 'view-category',
        component: ViewCategoryComponent,
        canActivate: [authGuard],
      },
      {
        path: 'favorite',
        component: FavouritNoteComponent,
        canActivate: [authGuard],
      },
      {
        path: 'recycle-bin',
        component: RecycleBinComponent,
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];
