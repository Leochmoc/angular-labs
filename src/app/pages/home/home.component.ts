import { Component } from '@angular/core';
import { LayoutComponent } from '../../layouts/layout/layout.component';
import { TitleComponent } from '../../components/title/title.component';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutComponent, TitleComponent, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
