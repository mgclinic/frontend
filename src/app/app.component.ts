import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { LoaderService } from './services/loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatProgressSpinnerModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mgclinic-app';
  loading: Observable<boolean>;

  constructor(private router: Router, private loaderService: LoaderService) {
    this.loading = this.loaderService.loading$;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loaderService.show(); // Show loader on navigation start
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loaderService.hide(); // Hide loader on navigation end, cancel, or error
      }
    });
  }
}
