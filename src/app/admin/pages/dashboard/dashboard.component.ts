import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../website/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  data:any

  constructor(private as:AuthService){

  }

  ngOnInit(): void {
    this.as.getAllCount().subscribe((res:any) => {
      console.log("res",res)
      this.data = res
    })
  }

  goto(url:any){
   
  }

}
