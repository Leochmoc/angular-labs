import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfolabsComponent } from './infolabs.component';

describe('InfolabsComponent', () => {
  let component: InfolabsComponent;
  let fixture: ComponentFixture<InfolabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfolabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfolabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
