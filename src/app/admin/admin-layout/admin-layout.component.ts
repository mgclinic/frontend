import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { AuthService } from '../../website/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet,CommonModule,MatToolbarModule, MatListModule,MatButtonModule, MatIconModule,MatSidenavModule, MatButtonModule,RouterLink],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})

export class AdminLayoutComponent {
  showFiller = false;

  constructor(private as:AuthService,private router:Router ){

  }

  logout() {
    this.as.logout().subscribe({
      next: () => {
        console.log('Logout successful');
        this.router.navigate(['login'])
      },
      error: (err) => {
        console.error('Logout error:', err);
      }
    });
  }
}
