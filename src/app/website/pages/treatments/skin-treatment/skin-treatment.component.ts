import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-skin-treatment',
  standalone: true,
  imports: [HeaderComponent, MatCardModule, CommonModule,MatIconModule],
  templateUrl: './skin-treatment.component.html',
  styleUrls: ['./skin-treatment.component.scss']
})
export class SkinTreatmentComponent {


  scrollToSection(section:string) {
    window.location.hash = section;
  }

}
