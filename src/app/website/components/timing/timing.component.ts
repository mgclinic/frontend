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
    { session: 'Morning', time: '10:00 AM - 1:00 PM', icon: 'sun' },
    { session: 'Evening', time: '5:00 PM - 8:00 PM', icon: 'moon' }
  ];

}
