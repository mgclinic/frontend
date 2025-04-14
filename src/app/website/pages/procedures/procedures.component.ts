import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procedures',
  standalone:true,
  imports: [HeaderComponent,CommonModule,MatCardModule,MatButtonModule],
  templateUrl: './procedures.component.html',
  styleUrl: './procedures.component.scss'
})
export class ProceduresComponent {

  constructor(private router:Router){}



  gotoAppointment(){
    this.router.navigate(['/book-appointment']);
  }

}
