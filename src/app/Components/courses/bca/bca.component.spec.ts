import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcaComponent } from './bca.component';

describe('BcaComponent', () => {
  let component: BcaComponent;
  let fixture: ComponentFixture<BcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
