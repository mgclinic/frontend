import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-skin-treatment',
  standalone: true,
  imports: [HeaderComponent, MatCardModule, CommonModule,MatIconModule,MatButtonModule],
  templateUrl: './skin-treatment.component.html',
  styleUrls: ['./skin-treatment.component.scss']
})
export class SkinTreatmentComponent {


  data = [
    {
      url:'acne',
      label:'ACNE'
    },
    {
      url:'melasma',
      label:'MELASMA'
    },
    {
      url:'eczema',
      label:'ECZEMA'
    },
    {
      url:'psoriasis',
      label:'PSORIASIS'
    },
    {
      url:'vitiligo',
      label:'VITILIGO'
    },
    {
      url:'psoriasis',
      label:'PSORIASIS'
    },
    {
      url:'Keloids',
      label:'KELOIDS'
    },
  ]


  scrollToSection(section:string) {
    window.location.hash = section;
  }

}
