import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layaut } from './layaut';

describe('Layaut', () => {
  let component: Layaut;
  let fixture: ComponentFixture<Layaut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layaut]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Layaut);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
