import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  loggedUserMenu: any[] = [];

  ngOnInit(): void {
    this.getLogInUserMenu();
  }
  router = inject(Router);
  // menuList: any = {
  //   USER: [
  //     { path: 'addnotes',title: 'Add Notes'},
  //     {path: 'view-notes',title: 'View',},
  //     {path: 'favorite',title: 'Favorite',},
  //     {path: 'recycle-bin',title: 'Recycle Bin'},
  //   ],
  //   ADMIN: [
  //     {path: 'add-category',title: 'Add Category',},
  //   ],
  // };
  menuList: any[] = [
    { path: 'addnotes', title: 'Add Notes', roles: ['USER'] },
    { path: 'view-notes', title: 'View', roles: ['USER'] },
    { path: 'favorite', title: 'Favorite', roles: ['USER'] },
    { path: 'recycle-bin', title: 'Recycle Bin', roles: ['USER', 'ADMIN'] },
    { path: 'add-category', title: 'Add Category', roles: ['ADMIN'] },
  ];

  logout() {
    localStorage.removeItem('token');
  }
  getLogInUserMenu() {
    const logData = localStorage.getItem('userDtls');

    if (logData) {
      const userData = JSON.parse(logData);
      // this.loggedUserMenu = this.menuList[userData.roles[0].name];
      this.loggedUserMenu = this.menuList.filter((m) =>
        m.roles?.includes('USER')
      );
      console.log(this.loggedUserMenu);
    }
  }
}
