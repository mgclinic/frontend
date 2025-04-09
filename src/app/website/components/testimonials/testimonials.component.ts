import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { TestimonialService } from '../../../admin/services/testimonial.service';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule, CarouselModule],
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit {
  // testimonials = [
  //   {
  //     name: 'John Doe',
  //     message: 'Dr. Rohal is an excellent dermatologist. My skin has never felt better!',
  //     rating: 5,
  //     location: 'Unknown'
  //   },
  //   {
  //     name: 'Sarah Smith',
  //     message: 'The clinic offers outstanding services. Highly recommended!',
  //     rating: 5,
  //     location: 'Unknown'
  //   },
  //   {
  //     name: 'Michael Lee',
  //     message: 'Very professional and friendly. The treatment worked wonders for me.',
  //     rating: 4.5,
  //     location: 'Unknown'
  //   },
  //   {
  //     name: 'Aarif Mohaned',
  //     message: 'In my experience, here at the Velachery clinic, I found the treatment given to patients to be excellent. All reports were ready at the committed time, and everything was so efficient and adequately ta...',
  //     rating: 5,
  //     location: 'Velachery'
  //   },
  //   {
  //     name: 'Abhishek Mahajan',
  //     message: 'My experience at the Indirapuram Clinic was very good. I particularly liked the good management and their fast services. From getting appointment, cleanliness, time of billing, getting results to the ...',
  //     rating: 5,
  //     location: 'Indirapuram'
  //   },
  //   {
  //     name: 'Amareswara',
  //     message: 'I visited the Chanda Nagar clinic for my treatment. The staff was very supportive and provided with all the necessary information. I liked the technical expertise provided by the nurses, phlebotomist ...',
  //     rating: 5,
  //     location: 'Chanda Nagar'
  //   },
  //   {
  //     name: 'Ankur Rana',
  //     message: 'While visiting the Indirapuram clinic, my experience was very smooth. The nurses, radiology technician and the phlebotomist all were very helpful. Getting an appointment was easy and the waiting time ...',
  //     rating: 5,
  //     location: 'Indirapuram'
  //   },
  //   {
  //     name: 'Anthony Prakash',
  //     message: 'I visited the Mysore clinic for my treatment and was very impressed. The staff had a very friendly approach. The phlebotomist, radiology technician and nurses were very supportive and helpful. The ove...',
  //     rating: 5,
  //     location: 'VV Mohalla'
  //   }
  // ];

  testimonials:any[] = [];
  constructor(private testimonialService: TestimonialService) {

  }

  ngOnInit(): void {
   this.testimonialService.getTestimonials().subscribe((testimonials) => {
      this.testimonials = testimonials;
    });
  }



  carouselOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: false,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      1024: {
        items: 5
      }
    }
  };

  getStarArray(rating: number): number[] {
    return Array(Math.floor(rating));
  }

  hasHalfStar(rating: number): boolean {
    return rating % 1 !== 0;
  }
}
