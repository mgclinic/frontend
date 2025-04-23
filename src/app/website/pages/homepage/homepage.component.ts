import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BannerComponent } from "../../components/banner/banner.component";
import { AboutClinicComponent } from "../../components/about-clinic/about-clinic.component";
import { AboutDoctorComponent } from "../../components/about-doctor/about-doctor.component";
import { BookAppointmentComponent } from "../../components/book-appointment/book-appointment.component";
import { OurServicesComponent } from "../../components/our-services/our-services.component";
import { EnquiryComponent } from "../../components/enquiry/enquiry.component";
import { TimingComponent } from "../../components/timing/timing.component";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";
import { NewsletterComponent } from "../../components/newsletter/newsletter.component";
import { FaqsComponent } from '../../components/faqs/faqs.component';
import { BeforeAfterComponent } from "../../components/before-after/before-after.component";

@Component({
  selector: 'app-homepage',
  imports: [MatButtonModule, CommonModule, BannerComponent, BannerComponent, AboutClinicComponent, AboutDoctorComponent, BookAppointmentComponent, OurServicesComponent, EnquiryComponent, TimingComponent, TestimonialsComponent, FaqsComponent, BeforeAfterComponent],
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  

}
