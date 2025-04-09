import { Routes } from '@angular/router';

import { HomepageComponent } from "./website/pages/homepage/homepage.component";
import { WebsiteLayoutComponent } from "./website/website-layout/website-layout.component";
import { LoginComponent } from './website/pages/login/login.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { FaqsComponent } from './admin/pages/faqs/faqs.component';
import { AuthGuard } from './guards/auth.guard';
import { AppointmentsComponent } from './admin/pages/appointments/appointments.component';
import { EnquiriesComponent } from './admin/pages/enquiries/enquiries.component';
import { SliderComponent } from './admin/pages/slider/slider.component';
import { TestimonialsComponent } from './admin/pages/testimonials/testimonials.component';
import { HairTreatmentComponent } from './website/pages/treatments/hair-treatment/hair-treatment.component';
import { SkinTreatmentComponent } from './website/pages/treatments/skin-treatment/skin-treatment.component';
import { NailTreatmentComponent } from './website/pages/treatments/nail-treatment/nail-treatment.component';
import { LaserTreatmentComponent } from './website/pages/treatments/laser-treatment/laser-treatment.component';
import { AboutComponent } from './website/pages/about/about.component';
import { ContactComponent } from './website/pages/contact/contact.component';
import { ProceduresComponent } from './website/pages/procedures/procedures.component';
import { TermsConditionComponent } from './website/pages/terms-condition/terms-condition.component';
import { PrivacyPolicyComponent } from './website/pages/privacy-policy/privacy-policy.component';
import { BookAppointmentComponent } from './website/components/book-appointment/book-appointment.component';
import { BookAppointmentPageComponent } from './website/pages/book-appointment-page/book-appointment-page.component';

export const routes: Routes = [
    {
      path: '',
      component: WebsiteLayoutComponent,
      children: [
        {
          path: '',
          component: HomepageComponent,
        },  
        {
          path: 'about',
          component: AboutComponent,
        },  
        {
          path: 'contact',
          component: ContactComponent,
        },  
        {
          path: 'hair-treatment',
          component: HairTreatmentComponent,
        },  
        {
          path: 'skin-treatment',
          component: SkinTreatmentComponent,
        },  
        {
          path: 'nail-treatment',
          component: NailTreatmentComponent,
        },  
        {
          path: 'laser-treatment',
          component: LaserTreatmentComponent,
        },  
        {
          path: 'procedures',
          component: ProceduresComponent,
        },
        {
          path: 'terms-condition',
          component: TermsConditionComponent,
        },
        {
          path: 'book-appointment',
          component: BookAppointmentPageComponent,
        },  
        {
          path: 'privacy-policy',
          component: PrivacyPolicyComponent,
        },  
        {
          path: 'login',
          component: LoginComponent,
        },  
         
      ],
    },

    {
      path: 'admin-panel',
      component: AdminLayoutComponent,
      canActivate: [AuthGuard],
      children: [
        { path: '', component: DashboardComponent },
        {
          path: 'faqs',
          component: FaqsComponent,

        },
        {
          path: 'appointments',
          component: AppointmentsComponent,

        },
        {
          path: 'enquiries',
          component: EnquiriesComponent,

        },
        {
          path: 'slider',
          component: SliderComponent,
        },
        {
          path: 'testimonials',
          component: TestimonialsComponent,
        },
      ],
    },
  ];
