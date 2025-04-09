import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NailTreatmentComponent } from './nail-treatment.component';

describe('NailTreatmentComponent', () => {
  let component: NailTreatmentComponent;
  let fixture: ComponentFixture<NailTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NailTreatmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NailTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
