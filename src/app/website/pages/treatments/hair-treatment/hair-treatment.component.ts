import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-hair-treatment',
  standalone: true,
  imports: [CommonModule,HeaderComponent, MatCardModule,MatButtonModule],
  templateUrl: './hair-treatment.component.html',
  styleUrl: './hair-treatment.component.scss'
})
export class HairTreatmentComponent {

  
  data = [
    {
      url:'androgenetic-alopecia',
      label:'Androgenetic Alopecia'
    },
    {
      url:'telogen-effluvium',
      label:'Telogen Effluvium'
    },
    {
      url:'seborrheic-dermatitis',
      label:'Seborrheic Dermatitis'
    },
    {
      url:'alopecia-areata',
      label:'Alopecia Areata'
    },
    {
      url:'scalp-fungal-infections',
      label:'Scalp Fungal Infections'
    },
  ]

  
  scrollToSection(section:string) {
    window.location.hash = section;
  }

}
