import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { AppointmentService } from '../../../admin/services/appointment.service';
import { CommonToastrService } from '../../../admin/services/common-toastr.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-book-appointment',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatCardModule
  ],
  templateUrl: './book-appointment.component.html',
  styleUrl: './book-appointment.component.scss'
})
export class BookAppointmentComponent {
  appointmentForm: FormGroup;
  doctorName = 'Dr. Rohal';
  availableTimeSlots = [
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM'
  ];

  constructor(private fb: FormBuilder, private as: AppointmentService, private toastr: CommonToastrService) {
    this.appointmentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      date: ['', Validators.required],
      gender: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.appointmentForm.valid) {
      this.as.createAppointment(this.appointmentForm.value).subscribe({
        next: (value) => {
          if (value) {
            this.toastr.showSuccess("Appointment Scheduled");
            this.appointmentForm.reset();
            Object.keys(this.appointmentForm.controls).forEach(key => {
              this.appointmentForm.get(key)?.setErrors(null);
            });
          }
        },
        error: (err) => {
          this.toastr.showError("Failed to schedule appointment");
        },
        complete: () => {
          this.appointmentForm.markAsUntouched();
        }
      });
    }
  }
}

