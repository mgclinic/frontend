import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-laser-treatment',
  imports: [CommonModule,HeaderComponent, MatCardModule],
  templateUrl: './laser-treatment.component.html',
  styleUrl: './laser-treatment.component.scss'
})
export class LaserTreatmentComponent {

}
