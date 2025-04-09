import { Component, inject, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonToastrService } from '../../services/common-toastr.service';
import { AppointmentService } from '../../services/appointment.service';
import { CommonDialogComponent } from '../../shared/common-dialog/common-dialog.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-appointments',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,MatButtonModule,MatIconModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss'
})
export class AppointmentsComponent {

  
    readonly dialog = inject(MatDialog);
  
    displayedColumns: string[] = ['id', 'name', 'gender','email','phone','date','time','action'];
    dataSource: MatTableDataSource<any> = new MatTableDataSource();
  
    @ViewChild(MatPaginator) paginator!: MatPaginator; 
    @ViewChild(MatSort) sort!: MatSort; 
    constructor(private appointmentService: AppointmentService,private toastr:CommonToastrService) {
    }
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  
    ngOnInit(): void {
      this.getAppointments();
    }
  
  
    getAppointments(){
      this.appointmentService.getAppointments().subscribe((res: any) => { 
        console.log("res",res)
        this.dataSource.data = res;
      });
    }
  

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

  
    addAppointment(){
      this.openDialog()
    }
  

    openDialog() {
      const dialogRef = this.dialog.open(CommonDialogComponent, {
        width: '600px',
        data: {
          data:{
            name: '',
            email: '',
            gender: '',
            phone: '',
            date: '',
            time: ''
          },
          title: 'APPOINTMENT',
          action: 'Add'
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result) this.getAppointments()
      });
    }

  
    editAppointments(data:any){
      const dialogRef = this.dialog.open(CommonDialogComponent, {
        width: '600px',
        data: {
          data:data,
          title: 'APPOINTMENT',
          action: 'Update'
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result) this.getAppointments()
      });
    }
  
    deleteAppointment(id:any){
      this.appointmentService.deleteAppointment(id).subscribe({
        next: value => {
          this.toastr.showSuccess("Deleted")
        },
        error: err => {
          this.toastr.showError(err) 
        },
        complete: () => {
          this.getAppointments()
        }
      });
     
    }

}


export interface UserData {
  id: string,
  name: string,
  gender: string,
  email: string,
  phone: string,
  date: string,
  time: string
}
