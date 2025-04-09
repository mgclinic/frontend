import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonToastrService {

  constructor(private toastr : ToastrService) { }

  showSuccess(message:string) {
    this.toastr.success(message, 'Successfully');
  }

  showError(message:string) {
    this.toastr.error(message, 'Error');
  }

  showInfo(message:string) {
    this.toastr.success(message, 'Info');
  }

  showWarning(message:string) {
    this.toastr.success(message, 'Warning');
  }


}
