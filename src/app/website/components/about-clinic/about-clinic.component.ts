import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about-clinic',
  imports: [CommonModule, MatCardModule],
  templateUrl: './about-clinic.component.html',
  styleUrl: './about-clinic.component.scss'
})
export class AboutClinicComponent {
  clinicInfo = {
    name: 'MG Clinic',
    description: 'MG Clinic is a state-of-the-art medical facility dedicated to providing high-quality healthcare services with experienced professionals and modern technology.',
    image: 'images/abtclinic.jpg',
    features: [
      '24/7 Emergency Service',
      'Experienced Medical Staff',
      'Advanced Equipment',
      'Comfortable Patient Rooms'
    ]
  };
}
