import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
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


export class AppComponent implements AfterViewInit {
  title = 'mgclinic-app';
  loading: Observable<boolean>;

  constructor(
    private router: Router,
    public loaderService: LoaderService,
    private cdref: ChangeDetectorRef
  ) {
    this.loading = this.loaderService.loading$;
  }

  ngAfterViewInit(): void {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationStart) {
    //     this.loaderService.show(); 
    //   } else if (
    //     event instanceof NavigationEnd ||
    //     event instanceof NavigationCancel ||
    //     event instanceof NavigationError
    //   ) {
    //     this.loaderService.hide(); 
    //   }
    // });
    // Optional: only needed if you're modifying anything else in the view here
    // this.cdref.detectChanges();
  }
}

