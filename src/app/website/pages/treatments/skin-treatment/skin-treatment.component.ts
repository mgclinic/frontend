import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skin-treatment',
  standalone: true,
  imports: [HeaderComponent, MatCardModule, CommonModule],
  templateUrl: './skin-treatment.component.html',
  styleUrls: ['./skin-treatment.component.css']
})
export class SkinTreatmentComponent {

}
