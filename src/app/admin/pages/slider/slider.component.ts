import { Component, inject, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonToastrService } from '../../services/common-toastr.service';
import { SliderService } from '../../services/slider.service';
import { CommonDialogComponent } from '../../shared/common-dialog/common-dialog.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slider',
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
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  standalone: true
})
export class SliderComponent {
  readonly dialog = inject(MatDialog);

  displayedColumns: string[] = ['id', 'alt', 'image', 'action'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator; 
  @ViewChild(MatSort) sort!: MatSort; 

  constructor(private sliderService: SliderService, private toastr: CommonToastrService) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getSliders();
  }

  getSliders() {
    this.sliderService.getSliders().subscribe((res: any) => { 
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

  addSlider() {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      width: '600px',
      data: {
        data: {
          alt: '',
          image: ''
        },
        title: 'SLIDER',
        action: 'Add'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.getSliders();
    });
  }

  editSlider(data: any) {
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      width: '600px',
      data: {
        data: data,
        title: 'SLIDER',
        action: 'Update'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.getSliders();
    });
  }

  deleteSlider(id: any) {
    this.sliderService.deleteSlider(id).subscribe({
      next: value => {
        this.toastr.showSuccess("Deleted");
      },
      error: err => {
        this.toastr.showError(err);
      },
      complete: () => {
        this.getSliders();
      }
    });
  }
}
