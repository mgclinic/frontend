import { Component } from '@angular/core';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from '@angular/cdk/menu';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CdkMenu, CdkMenuItem, CdkMenuTrigger,RouterLink],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

constructor(private router: Router) {}

book() {
  this.router.navigate(['/book-appointment']);
}

  call(){
    window.location.href = 'tel:+9171441657';
  }
}
