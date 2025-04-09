import { Component } from '@angular/core';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from '@angular/cdk/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CdkMenu, CdkMenuItem, CdkMenuTrigger,RouterLink],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}
