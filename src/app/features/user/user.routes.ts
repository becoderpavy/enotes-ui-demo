import { Route, Routes } from '@angular/router';
import { LayoutComponent } from '../../layout/layout/layout.component';
import { authGuard } from '../../core/guards/auth.guard';

export const userRoute: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./component/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
        // component: DashboardComponent,
        canActivate: [authGuard],
      },
      {
        path: 'addnotes',
        loadComponent: () =>
          import('./component/add-note/add-note.component').then(
            (c) => c.AddNoteComponent
          ),
        // component: AddNoteComponent,
        canActivate: [authGuard],
      },
      {
        path: 'view-notes',
        // component: ViewNotesComponent,
        loadComponent: () =>
          import('./component/view-notes/view-notes.component').then(
            (c) => c.ViewNotesComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'add-category',
        // component: AddCategoryComponent,
        loadComponent: () =>
          import('./component/add-category/add-category.component').then(
            (c) => c.AddCategoryComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'view-category',
        // component: ViewCategoryComponent,
        loadComponent: () =>
          import('./component/view-category/view-category.component').then(
            (c) => c.ViewCategoryComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'favorite',
        // component: FavouritNoteComponent,
        loadComponent: () =>
          import('./component/favourit-note/favourit-note.component').then(
            (c) => c.FavouritNoteComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'recycle-bin',
        // component: RecycleBinComponent,
        loadComponent: () =>
          import('./component/recycle-bin/recycle-bin.component').then(
            (c) => c.RecycleBinComponent
          ),
        canActivate: [authGuard],
      },
    ],
  },
];
