import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelabsComponent } from './homelabs.component';

describe('HomelabsComponent', () => {
  let component: HomelabsComponent;
  let fixture: ComponentFixture<HomelabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomelabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomelabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
