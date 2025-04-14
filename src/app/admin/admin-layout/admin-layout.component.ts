import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet,CommonModule,MatToolbarModule, MatListModule,MatButtonModule, MatIconModule,MatSidenavModule, MatButtonModule,RouterLink],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})

export class AdminLayoutComponent {
  showFiller = false;
}
