import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { FaqService } from '../../services/faq.service';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { AppointmentService } from '../../services/appointment.service';
import { EnquiryService } from '../../services/enquiry.service';
import { TestimonialService } from '../../services/testimonial.service';
import { SliderService } from '../../services/slider.service'; // Import SliderService
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatTimepickerModule } from '@angular/material/timepicker';

@Component({
  selector: 'app-common-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatTimepickerModule, // Ensure MatTimepickerModule is imported here
    MatNativeDateModule
  ],
  templateUrl: './common-dialog.component.html',
  styleUrls: ['./common-dialog.component.scss'],
  providers: [provideNativeDateAdapter()],
})
export class CommonDialogComponent {
  faqForm!: FormGroup;
  appointmentForm!: FormGroup;
  enquiryForm!: FormGroup;
  testimonialForm!: FormGroup;
  sliderForm!: FormGroup; // Add sliderForm
  isLoading = false;
  errorMessage: string | null = null;
  timepicker: any;

  constructor(
    private faqService: FaqService,
    private as: AppointmentService,
    private es: EnquiryService,
    private ts: TestimonialService,
    private ss: SliderService, // Inject SliderService
    public dialogRef: MatDialogRef<CommonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { data: any, title: string, action: string },
    private fb: FormBuilder
  ) {
    if (data.title == 'FAQ') {
      this.faqForm = this.fb.group({
        ques: [data.data.ques],
        ans: [data.data.ans]
      });
    }

    if (data.title == 'APPOINTMENT') {
      this.appointmentForm = this.fb.group({
        name: [data.data.name],
        gender: [data.data.gender],
        email: [data.data.email],
        phone: [data.data.phone],
        date: [data.data.date],
        time: [data.data.time],
      });
    }

    if (data.title == 'ENQUIRY') {
      this.enquiryForm = this.fb.group({
        name: [data.data.name],
        email: [data.data.email],
        phone: [data.data.phone],
        message: [data.data.message],
        date: [data.data.date],
      });
    }

    if (data.title == 'TESTIMONIAL') {
      this.testimonialForm = this.fb.group({
        name: [data.data.name],
        location: [data.data.location],
        rating: [data.data.rating],
        message: [data.data.message]
      });
    }

    if (data.title == 'SLIDER') {
      this.sliderForm = this.fb.group({
        alt: [data.data.alt],
        image: [data.data.image]
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.data.title == 'FAQ') {
      if (this.faqForm.valid) {
        this.isLoading = true;
        this.errorMessage = null;

        if(this.data.action == 'Update'){
          this.faqService.updateFaq(this.data.data._id,this.faqForm.value).subscribe({
            next: (res) => {
              console.log("res", res);
              this.isLoading = false;
              this.dialogRef.close(true);
            },
            error: (err) => {
              console.log("err", err);
              this.isLoading = false;
              this.errorMessage = 'Failed to updated FAQ. Please try again.';
            }
          });
        } 
        if(this.data.action == 'Add'){
          this.faqService.createFaq(this.faqForm.value).subscribe({
            next: (res) => {
              console.log("res", res);
              this.isLoading = false;
              this.dialogRef.close(true);
            },
            error: (err) => {
              console.log("err", err);
              this.isLoading = false;
              this.errorMessage = 'Failed to create FAQ. Please try again.';
            }
          });
        }
      }
    }

    if (this.data.title == 'APPOINTMENT') {
      if (this.appointmentForm.valid) {
        this.isLoading = true;
        this.errorMessage = null;

        if(this.data.action == 'Add'){
          this.as.createAppointment(this.appointmentForm.value).subscribe({
            next: (res) => {
              console.log("res", res);
              this.isLoading = false;
              this.dialogRef.close(true);
            },
            error: (err) => {
              console.log("err", err);
              this.isLoading = false;
              this.errorMessage = 'Failed to create Appointment. Please try again.';
              this.dialogRef.close(false);
            }
          });
        } 
        if(this.data.action == 'Update'){
          this.as.updateAppointment(this.data.data._id,this.appointmentForm.value).subscribe({
            next: (res) => {
              console.log("res", res);
              this.isLoading = false;
              this.dialogRef.close(true);
            },
            error: (err) => {
              console.log("err", err);
              this.isLoading = false;
              this.errorMessage = 'Failed to create Appointment. Please try again.';
              this.dialogRef.close(false);
            }
          });
        }
      }
    }

    if (this.data.title == 'ENQUIRY') {
      if (this.enquiryForm.valid) {
        this.isLoading = true;
        this.errorMessage = null;

        if(this.data.action == 'Add'){
          this.es.createEnquiry(this.enquiryForm.value).subscribe({
            next: (res) => {
              console.log("res", res);
              this.isLoading = false;
              this.dialogRef.close(true);
            },
            error: (err) => {
              console.log("err", err);
              this.isLoading = false;
              this.errorMessage = 'Failed to create Enquiry. Please try again.';
              this.dialogRef.close(false);
            }
          });
        } 
        if(this.data.action == 'Update'){
          this.es.updateEnquiry(this.data.data._id,this.enquiryForm.value).subscribe({
            next: (res) => {
              console.log("res", res);
              this.isLoading = false;
              this.dialogRef.close(true);
            },
            error: (err) => {
              console.log("err", err);
              this.isLoading = false;
              this.errorMessage = 'Failed to update Enquiry. Please try again.';
              this.dialogRef.close(false);
            }
          });
        }
      }
    }

    if (this.data.title == 'TESTIMONIAL') {
      if (this.testimonialForm.valid) {
        this.isLoading = true;
        this.errorMessage = null;

        if(this.data.action == 'Add'){
          this.ts.createTestimonial(this.testimonialForm.value).subscribe({
            next: (res) => {
              console.log("res", res);
              this.isLoading = false;
              this.dialogRef.close(true);
            },
            error: (err) => {
              console.log("err", err);
              this.isLoading = false;
              this.errorMessage = 'Failed to create Testimonial. Please try again.';
              this.dialogRef.close(false);
            }
          });
        } 
        if(this.data.action == 'Update'){
          this.ts.updateTestimonial(this.data.data._id,this.testimonialForm.value).subscribe({
            next: (res) => {
              console.log("res", res);
              this.isLoading = false;
              this.dialogRef.close(true);
            },
            error: (err) => {
              console.log("err", err);
              this.isLoading = false;
              this.errorMessage = 'Failed to update Testimonial. Please try again.';
              this.dialogRef.close(false);
            }
          });
        }
      }
    }

    if (this.data.title == 'SLIDER') {
      if (this.sliderForm.valid) {
        this.isLoading = true;
        this.errorMessage = null;

        if(this.data.action == 'Add'){
          this.ss.createSlider(this.sliderForm.value).subscribe({
            next: (res) => {
              console.log("res", res);
              this.isLoading = false;
              this.dialogRef.close(true);
            },
            error: (err) => {
              console.log("err", err);
              this.isLoading = false;
              this.errorMessage = 'Failed to create Slider. Please try again.';
              this.dialogRef.close(false);
            }
          });
        } 
        if(this.data.action == 'Update'){
          this.ss.updateSlider(this.data.data._id,this.sliderForm.value).subscribe({
            next: (res) => {
              console.log("res", res);
              this.isLoading = false;
              this.dialogRef.close(true);
            },
            error: (err) => {
              console.log("err", err);
              this.isLoading = false;
              this.errorMessage = 'Failed to update Slider. Please try again.';
              this.dialogRef.close(false);
            }
          });
        }
      }
    }
  }
}
