import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaserTreatmentComponent } from './laser-treatment.component';

describe('LaserTreatmentComponent', () => {
  let component: LaserTreatmentComponent;
  let fixture: ComponentFixture<LaserTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaserTreatmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaserTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
