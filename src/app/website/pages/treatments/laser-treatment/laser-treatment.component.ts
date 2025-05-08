import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-laser-treatment',
  imports: [CommonModule,HeaderComponent, MatCardModule,MatButtonModule],
  templateUrl: './laser-treatment.component.html',
  styleUrl: './laser-treatment.component.scss'
})
export class LaserTreatmentComponent {

  data = [
    {
      url:'laser-treatment',
      label:'Laser Treatments'
    },
    {
      url:'co2-laser',
      label:'CO₂ Laserl'
    }
  ]

  scrollToSection(section:string) {
    window.location.hash = section;
  }
}
