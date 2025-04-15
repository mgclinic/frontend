import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-nail-treatment',
  standalone: true,
  imports: [CommonModule,HeaderComponent, MatCardModule],
  templateUrl: './nail-treatment.component.html',
  styleUrl: './nail-treatment.component.scss'
})
export class NailTreatmentComponent {

  scrollToSection(section:string) {
    window.location.hash = section;
  }


}

