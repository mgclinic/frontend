import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { BookAppointmentComponent } from '../../components/book-appointment/book-appointment.component';

@Component({
  selector: 'app-book-appointment-page',
  imports: [CommonModule,HeaderComponent,BookAppointmentComponent],
  templateUrl: './book-appointment-page.component.html',
  styleUrl: './book-appointment-page.component.scss'
})
export class BookAppointmentPageComponent {

}
