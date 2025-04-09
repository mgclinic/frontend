import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CommonDialogComponent } from '../../shared/common-dialog/common-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { FaqService } from '../../services/faq.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonToastrService } from '../../services/common-toastr.service';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,MatButtonModule,MatIconModule],
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements AfterViewInit , OnInit{

  readonly dialog = inject(MatDialog);

  displayedColumns: string[] = ['id', 'ques', 'ans','action'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator; 
  @ViewChild(MatSort) sort!: MatSort; 
  constructor(private faqService: FaqService,private toastr:CommonToastrService) {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getFaqs();
  }


  getFaqs(){
    this.faqService.getFaqs().subscribe((res: any) => { 
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

  addFaq(){
    this.openDialog()
  }

  openDialog() {
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      width: '600px',
      data: {
        data:{
          question: '',
          answer: ''
        },
        title: 'FAQ',
        action: 'Add'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.getFaqs();
    });
  }

  editFaq(data:any){
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      width: '600px',
      data: {
        data:data,
        title: 'FAQ',
        action: 'Update'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.getFaqs();
    });
  }

  deleteFaq(id:any){
    this.faqService.deleteFaq(id).subscribe({
      next: value => {
        this.toastr.showSuccess("Deleted")
      },
      error: err => {
        this.toastr.showError(err) 
      },
      complete: () => {
        this.getFaqs()
      }
    });
   
  }
}

export interface UserData {
  id: string;
  ques: string;
  ans: string;
}
