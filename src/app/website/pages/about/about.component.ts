import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button'; // Added for the button
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true, // Ensure it's a standalone component
  imports: [
    CommonModule,
    HeaderComponent,
    MatCardModule,
    MatDividerModule,
    MatButtonModule // Import MatButtonModule
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'] // Fixed typo: styleUrl -> styleUrls
})
export class AboutComponent {

  constructor(private router:Router){

  }


  gotoAppointment(){
    this.router.navigate(['/book-appointment']);
  }

}
