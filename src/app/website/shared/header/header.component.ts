import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [CommonModule]
})
export class HeaderComponent {
  @Input() currentBreadcrumb: string = ''; // Accept breadcrumb as input

  constructor() {}

}
