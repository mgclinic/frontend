import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-doctor',
  imports: [CommonModule],
  templateUrl: './about-doctor.component.html',
  styleUrl: './about-doctor.component.scss'
})
export class AboutDoctorComponent {
  doctorInfo = {
    name: 'Dr. Rohal Chandrakar',
    specialty: 'Dermatologist',
    description: 'Dr. Rohal Chandrakar is a highly experienced Dermatologist with over 15 years of medical expertise, specializing in skin health and patient care.',
    image: 'assets/images/doctor1.jpg',
    experience: '15+ Years Experience',
    qualifications: ['MBBS, MD (Dermatology)', 'Fellowship in Cosmetic Dermatology'],
    socialLinks: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  }
}
