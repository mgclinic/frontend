import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-banner',
  imports: [CommonModule,MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  constructor(private toastr: ToastrService) {}

  bookAppointment() {
    this.toastr.success('Redirecting to appointment booking!', 'Success');
    // Logic for redirection or opening booking form
  }
}
