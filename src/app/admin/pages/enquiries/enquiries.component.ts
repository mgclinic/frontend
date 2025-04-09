import { Component, inject, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonToastrService } from '../../services/common-toastr.service';
import { EnquiryService } from '../../services/enquiry.service';
import { CommonDialogComponent } from '../../shared/common-dialog/common-dialog.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-enquiries',
  imports: [
    CommonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './enquiries.component.html',
  styleUrl: './enquiries.component.scss'
})
export class EnquiriesComponent {
  readonly dialog = inject(MatDialog);

  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'message', 'date', 'action'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator; 
  @ViewChild(MatSort) sort!: MatSort; 

  constructor(private enquiryService: EnquiryService, private toastr: CommonToastrService) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getEnquiries();
  }

  getEnquiries() {
    this.enquiryService.getEnquiries().subscribe((res: any) => { 
      console.log("res", res);
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

  addEnquiry() {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      width: '600px',
      data: {
        data: {
          name: '',
          email: '',
          phone: '',
          message: '',
          date: ''
        },
        title: 'ENQUIRY',
        action: 'Add'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.getEnquiries();
    });
  }

  editEnquiry(data: any) {
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      width: '600px',
      data: {
        data: data,
        title: 'ENQUIRY',
        action: 'Update'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.getEnquiries();
    });
  }

  deleteEnquiry(id: any) {
    this.enquiryService.deleteEnquiry(id).subscribe({
      next: value => {
        this.toastr.showSuccess("Deleted");
      },
      error: err => {
        this.toastr.showError(err);
      },
      complete: () => {
        this.getEnquiries();
      }
    });
  }
}
