import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
// import { MatAccordion } from '@angular/material/expansion';
import { FaqService } from '../../../admin/services/faq.service';
import { CommonToastrService } from '../../../admin/services/common-toastr.service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
  standalone: true,
  imports: [CommonModule, MatExpansionModule]
})
export class FaqsComponent implements OnInit {


  faqs: any[] = [];
  constructor(private faqService: FaqService,private toastr: CommonToastrService,    private cdr: ChangeDetectorRef ) {

  }


  ngOnInit(): void {
    console.log("Initializing FaqsComponent...");
    this.getFaqs();
  }

  getFaqs(){
    this.faqService.getFaqs().subscribe({
      next: (value:any) => {
        if (value) {
          this.faqs = value; 
          this.cdr.detectChanges(); 
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

  
}
