import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nail-treatment',
  standalone: true,
  imports: [CommonModule,HeaderComponent, MatCardModule,MatButtonModule],
  templateUrl: './nail-treatment.component.html',
  styleUrl: './nail-treatment.component.scss'
})
export class NailTreatmentComponent {

  data = [
    {
      url:'nail-psoriasis',
      label:'Nail Psoriasis'
    },
    {
      url:'ingrown-toenail',
      label:'Ingrown Toenail'
    },
    {
      url:'fungal-nail-infection',
      label:'Fungal Nail Infection'
    }
  ]



  scrollToSection(section:string) {
    window.location.hash = section;
  }


}

