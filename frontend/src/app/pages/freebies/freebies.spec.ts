import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Freebies } from './freebies';

describe('Freebies', () => {
  let component: Freebies;
  let fixture: ComponentFixture<Freebies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Freebies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Freebies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
