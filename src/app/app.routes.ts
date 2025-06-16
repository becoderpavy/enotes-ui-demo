import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddNoteComponent } from './pages/add-note/add-note.component';
import { FavouritNoteComponent } from './pages/favourit-note/favourit-note.component';
import { RecycleBinComponent } from './pages/recycle-bin/recycle-bin.component';
import { ViewNotesComponent } from './pages/view-notes/view-notes.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { ViewCategoryComponent } from './pages/view-category/view-category.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
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
      },
      {
        path: 'addnotes',
        component: AddNoteComponent,
      },
      {
        path: 'view-notes',
        component: ViewNotesComponent,
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
      },
      {
        path: 'view-category',
        component: ViewCategoryComponent,
      },
      {
        path: 'favorite',
        component: FavouritNoteComponent,
      },
      {
        path: 'recycle-bin',
        component: RecycleBinComponent,
      },
      {
        path: '**',
        component: NotfoundComponent,
      },
    ],
  },
];
