import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-terms-condition',
  imports: [CommonModule,HeaderComponent],
  templateUrl: './terms-condition.component.html',
  styleUrl: './terms-condition.component.scss'
})
export class TermsConditionComponent {

}
