import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EnquiryService } from '../../../admin/services/enquiry.service';
import { CommonToastrService } from '../../../admin/services/common-toastr.service';

@Component({
  selector: 'app-enquiry',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.scss'
})
export class EnquiryComponent {
  enquiryForm: FormGroup;

  constructor(private fb: FormBuilder,private es: EnquiryService,private toastr:CommonToastrService) {
    this.enquiryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [ Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submitEnquiry() {
    if (this.enquiryForm.valid) {
      console.log('Enquiry Submitted:', this.enquiryForm.value);
      this.es.createEnquiry(this.enquiryForm.value).subscribe({
        next: (res) => {
          console.log("res", res);
          this.toastr.showSuccess('Enquiry submitted successfully!');
          Object.keys(this.enquiryForm.controls).forEach(key => {
            this.enquiryForm.get(key)?.setErrors(null);
          });
        },
        error: (err) => {
          console.error("err", err);
        }
      });


      this.enquiryForm.reset();
    }
  }
}
