import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HomeBannerComponent } from '../../features/home/component/home-banner/home-banner.component';

@Component({
  selector: 'app-home-layout',
  imports: [HomeBannerComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css',
})
export class HomeLayoutComponent {}
