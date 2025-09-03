import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-timing',
  imports: [CommonModule],
  templateUrl: './timing.component.html',
  styleUrl: './timing.component.scss'
})
export class TimingComponent {

  doctorName = 'Dr. Rohal';
  specialty = 'Dermatologist';

  timings = [
    { session: 'Morning', time: '10:30 AM - 4:00 PM', icon: 'sun' },
    { session: 'Evening', time: '07:30 PM - 10:00 PM', icon: 'moon' }
  ];

}
