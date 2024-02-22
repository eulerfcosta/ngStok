import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeadComponent} from '../head/head.component';
import {MenuNavComponent} from '../menu-nav/menu-nav.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [
    RouterOutlet,
    HeadComponent,
    MenuNavComponent,
    FooterComponent
  ],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {

}
