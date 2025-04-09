import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAccordion } from '@angular/material/expansion';
import { FaqService } from '../../../admin/services/faq.service';
import { CommonToastrService } from '../../../admin/services/common-toastr.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
  standalone: true,
  imports: [CommonModule, MatExpansionModule]
})
export class FaqsComponent implements OnInit {


  faqs!: any[];
  constructor(private faqService: FaqService,private toastr: CommonToastrService) {

  }


  ngOnInit(): void {
    console.log("Initializing FaqsComponent...");
    this.faqService.getFaqs().subscribe({
      next: (value:any) => {
        if (value) {
          this.faqs = value; 
        } else {
          console.warn("API returned no data.");
        }
      },
      error: (err) => {
        console.error("API call failed:", err);
        this.toastr.showError("Failed to fetch FAQs");
      },
      complete: () => {
        console.log("API call completed.");
      }
    });
  }

  // faqs = [
  //   {
  //     question: 'How do I book an appointment at Apollo Clinic?',
  //     answer: `
  //       You can
  //       a) Call our Customer Care number: 1860 500 7788
  //       b) Or send an SMS/whatsapp to 9701003333
  //       c) Or log on to www.apolloclinic.com and request an appointment
  //       d) Or directly walk in to the nearest Apollo Clinic
  //     `
  //   },
  //   {
  //     question: 'Is fasting required for my test?',
  //     answer: '...'
  //   },
  //   {
  //     question: 'Are all the Doctors available round-the-clock?',
  //     answer: '...'
  //   },
  //   {
  //     question: 'What are the services available in Apollo Clinic?',
  //     answer: '...'
  //   },
  //   {
  //     question: 'Do you have the facility of sample pickup for diagnostics?',
  //     answer: '...'
  //   },
  //   {
  //     question: 'What are the working hours? Are you open on Sundays?',
  //     answer: '...'
  //   },
  //   {
  //     question: 'Can emergencies be treated at Apollo Clinic?',
  //     answer: '...'
  //   },
  //   {
  //     question: 'Do you organise camps?',
  //     answer: '...'
  //   },
  //   {
  //     question: 'Can I get my child over for immunisation?',
  //     answer: '...'
  //   }
  // ];
}
