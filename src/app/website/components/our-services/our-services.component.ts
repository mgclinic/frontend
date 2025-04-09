import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-our-services',
  imports: [CommonModule, MatCardModule, MatIconModule, RouterLink],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {

  doctorName = 'Dr. Rohal';
  specialty = 'Dermatologist';

  services = [
    { icon: 'patch-check', title: 'Skin Consultation', description: 'Comprehensive skin assessments for all types of dermatological concerns.' },
    { icon: 'brush', title: 'Acne Treatment', description: 'Advanced acne management with personalized treatment plans.' },
    { icon: 'droplet', title: 'Laser Skin Therapy', description: 'Cutting-edge laser treatments for rejuvenation and scar reduction.' },
    { icon: 'emoji-smile', title: 'Anti-Aging Solutions', description: 'Wrinkle reduction, fillers, and non-surgical skin tightening.' },
    { icon: 'heart', title: 'Eczema & Psoriasis Care', description: 'Tailored treatments for chronic skin conditions to relieve symptoms.' },
    { icon: 'sun', title: 'Skin Cancer Screening', description: 'Early detection and preventive measures for skin health.' }
  ];

}
