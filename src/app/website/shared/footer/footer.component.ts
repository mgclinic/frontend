import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonToastrService } from '../../../admin/services/common-toastr.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule], // Add FormsModule here
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  email: string = ''; // Initialize email as an empty string

  constructor(private ct: CommonToastrService) {}

  subscribed(email: string) {
    // checking email is valid or not
    if (email.trim()) { // Ensure email is not empty or just whitespace
      this.ct.showSuccess('Subscribed Successfully');
    } else {
      this.ct.showError('Please enter a valid email');
    }
  }
}
