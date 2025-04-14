import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-hair-treatment',
  standalone: true,
  imports: [CommonModule,HeaderComponent, MatCardModule],
  templateUrl: './hair-treatment.component.html',
  styleUrl: './hair-treatment.component.scss'
})
export class HairTreatmentComponent {

}
