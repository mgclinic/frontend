import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-website-layout',
  standalone: true,
  imports: [CommonModule,RouterModule,NavbarComponent,FooterComponent ],
  templateUrl: './website-layout.component.html',
  styleUrls: ['./website-layout.component.scss']
})
export class WebsiteLayoutComponent {

}
